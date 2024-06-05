import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  cliente = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  };


  constructor(private router: Router, private clienteService: ClienteService,
    private http: HttpClient
  ) {}



  

/*   cadastrarCliente() {
    this.clienteService.cadastrarCliente(this.cliente)
      .subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso:', response);
          alert('Usuário Cadastrado com sucesso.');
        },
        error => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      );
    this.cliente = {
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
    };
  } */


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

  entrarCadEndereco(): void {
    // Navegar para a próxima etapa passando os dados do cliente
    this.router.navigate(['/cadastro-endereco'], { state: { cliente: this.cliente } });
  }


}



