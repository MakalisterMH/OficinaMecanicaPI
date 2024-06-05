import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {





  constructor(private router: Router) { }


  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }


  entrarCadFuncionario(): void {

    this.router.navigate(['/cadastro-funcionario']);
  }


  entrarCadCliente(): void {

    this.router.navigate(['/cadastro-cliente']);
  }

  entrarCadEndereco(): void {

    this.router.navigate(['/cadastro-endereco']);
  }


  entrarCadRevisao(): void {

    this.router.navigate(['/cadastro-revisao']);
  }

  entrarCadVeiculo(): void {

    this.router.navigate(['/cadastro-veiculo']);
  }

  entrarCadVeiculo2(): void {

    this.router.navigate(['/cadastro-veiculo2']);
  }

  entrarExibirClientes(): void {

    this.router.navigate(['/exibir-clientes']);
  }

  entrarExibirFuncionarios(): void {

    this.router.navigate(['/exibir-funcionarios']);
  }

  entrarExibirVeiculos(): void {

    this.router.navigate(['/exibir-veiculos']);
  }

  entrarExibirRevisoes(): void {

    this.router.navigate(['/exibir-revisoes']);
  }

}
