import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../veiculo.service';
import { PaginationService } from '../pagination.service';


interface Veiculo {
  id: number;
  cpf: string;
  placa: string;
  marca: string;
  modelo: string;
  ano: string;
}


@Component({
  selector: 'app-exibir-veiculos',
  templateUrl: './exibir-veiculos.component.html',
  styleUrl: './exibir-veiculos.component.css'
})
export class ExibirVeiculosComponent implements OnInit {


  veiculos: Veiculo[] = [];
  paginatedVeiculo: Veiculo[] = [];
  filteredVeiculos: Veiculo[] = [];
  currentPage = 1;
  maxPagesToShow = 3;
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router,private veiculoService: VeiculoService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(): void {
    this.http.get<Veiculo[]>('http://localhost:8080/veiculos')
      .subscribe(data => {
        this.veiculos = data.sort((a, b) => a.id - b.id);
        this.filteredVeiculos = this.veiculos;
        console.log('Clientes carregados e ordenados por ID:', this.veiculos);
        this.loadPage(1);
      });
  }

  filterVeiculos(): void {
    this.filteredVeiculos = this.veiculos.filter(veiculo => veiculo.modelo.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.loadPage(1);
  }

  editarVeiculo(veiculo: Veiculo): void {
    console.log('Cliente a ser editado:', veiculo);
    this.veiculoService.setVeiculo(veiculo);
    this.router.navigate(['/editar-veiculo']);
  }


  entrarPrincipal(): void {
    this.router.navigate(['/tela-principal']);
  }


  loadPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginatedVeiculo = this.paginationService.getPaginatedItems(this.filteredVeiculos, page);
  }

  get totalPages(): number {
    return this.paginationService.getTotalPages(this.filteredVeiculos.length);
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


}
