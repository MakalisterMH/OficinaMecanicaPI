import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrl: './editar-veiculo.component.css'
})
export class EditarVeiculoComponent implements OnInit {

  veiculo: any = {};

  constructor(private http: HttpClient, private router: Router, private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculo = this.veiculoService.getVeiculo();
    if (this.veiculo) {
      console.log('Veiculo recebido:', this.veiculo);
    } else {
      console.log('Nenhum veiculo recebido');
    }
  }

  atualizarVeiculo(): void {
    this.veiculoService.atualizarVeiculo(this.veiculo).subscribe(
      response => {
        console.log('Veiculo atualizado com sucesso:', response);
        this.router.navigate(['/exibir-veiculos']);
        this.veiculoService.clearVeiculo();
      },
      error => {
        console.error('Erro ao atualizar cliente:', error);
      }
    );
  }

  entrarPrincipal(): void {
    this.router.navigate(['/tela-principal']);
  }

  entrarExibirClientes(): void {

    this.router.navigate(['/exibir-clientes']);
  }

}