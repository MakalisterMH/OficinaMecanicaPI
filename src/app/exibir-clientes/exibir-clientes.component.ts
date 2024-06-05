import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { PaginationService } from '../pagination.service';

interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Component({
  selector: 'app-exibir-clientes',
  templateUrl: './exibir-clientes.component.html',
  styleUrls: ['./exibir-clientes.component.css']
})
export class ExibirClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  paginatedCliente: Cliente[] = [];
  currentPage = 1;
  maxPagesToShow = 3;
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router, private clienteService: ClienteService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.http.get<Cliente[]>('http://localhost:8080/clientes')
      .subscribe(data => {
        this.clientes = data.sort((a, b) => a.id - b.id);
        this.filteredClientes = this.clientes;
        console.log('Clientes carregados e ordenados por ID:', this.clientes);
        this.loadPage(1);
      });
  }

  filterClientes(): void {
    this.filteredClientes = this.clientes.filter(cliente => cliente.nome.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.loadPage(1);
  }

  editarCliente(cliente: Cliente): void {
    console.log('Cliente a ser editado:', cliente);
    this.clienteService.setCliente(cliente);
    this.router.navigate(['/editar-cliente']);
  }

  loadPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginatedCliente = this.paginationService.getPaginatedItems(this.filteredClientes, page);
  }

  get totalPages(): number {
    return this.paginationService.getTotalPages(this.filteredClientes.length);
  }

  get displayedPages(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = this.maxPagesToShow;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - halfPagesToShow);
    let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

    if (currentPage <= halfPagesToShow) {
      endPage = Math.min(totalPages, maxPagesToShow);
    } else if (currentPage + halfPagesToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToFirstPage(): void {
    this.loadPage(1);
  }

  goToLastPage(): void {
    this.loadPage(this.totalPages);
  }

  goToNextPage(): void {
    this.loadPage(this.currentPage + 1);
  }

  goToPreviousPage(): void {
    this.loadPage(this.currentPage - 1);
  }

  entrarPrincipal(): void {
    this.router.navigate(['/tela-principal']);
  }
}
