import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.css'
})
export class CadastroEnderecoComponent implements OnInit {

  cliente = {
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  };

  endereco = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  };

  constructor(private router: Router, private clienteService: ClienteService,private http: HttpClient) {}

  ngOnInit(): void {
    // Carregar os dados do cliente salvos anteriormente
    const clienteSalvo = history.state.cliente;
    if (clienteSalvo) {
      this.endereco = clienteSalvo;
      this.cliente = clienteSalvo;
    }
  }


  cadastrarEndereco() {
    this.clienteService.cadastrarCliente(this.endereco)
      .subscribe(
        response => {
          console.log('Cliente cadastrado com sucesso:', response);
          // Navegar para próxima etapa ou finalizar cadastro
          this.entrarCadVeiculo();
        },
        error => {
          console.error('Erro ao cadastrar cliente:', error);
        }
      );
  }



  // Função para buscar dados do CEP na API do ViaCEP
  buscarCep() {
    if (this.endereco.cep) {
      this.http.get(`https://viacep.com.br/ws/${this.endereco.cep}/json/`).subscribe(
        (data: any) => {
          this.endereco.logradouro = data.logradouro;
          this.endereco.bairro = data.bairro;
          this.endereco.localidade = data.localidade;
          this.endereco.uf = data.uf;
        },
        error => {

          console.error('Erro ao buscar CEP:', error);
          alert('CEP não encontrado.');
        }
      );
    }
  }

  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  

  entrarCadVeiculo(): void {

    this.router.navigate(['/cadastro-veiculo'], { state: { cliente: this.cliente } });
  }   

}
