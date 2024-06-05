import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../veiculo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-veiculo2',
  templateUrl: './cadastro-veiculo2.component.html',
  styleUrl: './cadastro-veiculo2.component.css'
})
export class CadastroVeiculo2Component{



  veiculo = {
    cpf: '',
    placa: '',
    marca: '',
    modelo: '',
    ano: '',
  };


  constructor(private router: Router, private veiculoService: VeiculoService,
    private http: HttpClient
  ) {}



  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  


  cadastrarVeiculo() {
    this.veiculoService.cadastrarVeiculo(this.veiculo)
      .subscribe(
        response => {
          console.log('Veiculo cadastrado com sucesso:', response);
          alert('Veiculo Cadastrado com sucesso.');
        },
        error => {
          console.error('Erro ao cadastrar Veiculo:', error);
        }
      );

  } 

}

