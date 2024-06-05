import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { PaginationService } from '../pagination.service';

interface Funcionario {
  id: number;
  nome: string;
  senha: string;
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
  selector: 'app-exibir-funcionarios',
  templateUrl: './exibir-funcionarios.component.html',
  styleUrls: ['./exibir-funcionarios.component.css']
})
export class ExibirFuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  filteredFuncionarios: Funcionario[] = [];
  paginatedFuncionarios: Funcionario[] = [];
  currentPage = 1;
  maxPagesToShow = 3;
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router, private funcionarioService: FuncionarioService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios(): void {
    this.http.get<Funcionario[]>('http://localhost:8080/funcionarios')
      .subscribe(data => {
        this.funcionarios = data.sort((a, b) => a.id - b.id);
        this.filteredFuncionarios = this.funcionarios;
        console.log('Clientes carregados e ordenados por ID:', this.funcionarios);
        this.loadPage(1);
      });
  }

  filterFuncionarios(): void {
    this.filteredFuncionarios = this.funcionarios.filter(funcionario => funcionario.nome.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.loadPage(1);
  }

  editarFuncionario(funcionario: Funcionario): void {
    console.log('Cliente a ser editado:', funcionario);
    this.funcionarioService.setFuncionario(funcionario);
    this.router.navigate(['/editar-funcionario']);
  }


  loadPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginatedFuncionarios = this.paginationService.getPaginatedItems(this.filteredFuncionarios, page);
  }

  get totalPages(): number {
    return this.paginationService.getTotalPages(this.funcionarios.length);
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
