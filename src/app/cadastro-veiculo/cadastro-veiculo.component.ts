import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent implements OnInit {

  cliente = {
    nome:'',
    cpf: ''
  };

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

  ngOnInit(): void {
    // Carregar os dados do cliente salvos anteriormente
    const clienteSalvo = history.state.cliente;
    if (clienteSalvo) {
      this.cliente.cpf = clienteSalvo.cpf;
      this.cliente.nome = clienteSalvo.nome;
    }
  }

  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  


  cadastrarVeiculo() {
    this.veiculo.cpf = this.cliente.cpf;
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
