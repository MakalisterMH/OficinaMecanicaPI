import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrl: './cadastro-funcionario.component.css'
})
export class CadastroFuncionarioComponent {

  funcionario = {
    nome: '',
    senha: '',
    cpf: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  };




  constructor(private router: Router, private funcionarioService: FuncionarioService,
    private http: HttpClient
  ) { }



  cadastrarFuncionario() {
      this.funcionarioService.cadastrarFuncionario(this.funcionario)
        .subscribe(
          response => {
            console.log('Funcionario cadastrado com sucesso:', response);
            alert('Funcionario Cadastrado com sucesso.');
          },
          error => {
            console.error('Erro ao cadastrar Funcionario:', error);
          }
        );
  
    } 

  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }



}