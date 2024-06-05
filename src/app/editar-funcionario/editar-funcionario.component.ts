import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrl: './editar-funcionario.component.css'
})



export class EditarFuncionarioComponent implements OnInit {


funcionario: any = {};

constructor(private http: HttpClient, private router: Router, private funcionarioService: FuncionarioService){}


ngOnInit(): void {
  this.funcionario = this.funcionarioService.getFuncionario();
  if (this.funcionario) {
    console.log('Funcionario recebido:', this.funcionario);
  } else {
    console.log('Nenhum funcionario recebido');
  }
}

atualizarFuncionario(): void {
  this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe(
    response => {
      console.log('Cliente atualizado com sucesso:', response);
      this.router.navigate(['/exibir-funcionarios']);
      this.funcionarioService.clearFuncionario();
    },
    error => {
      console.error('Erro ao atualizar cliente:', error);
    }
  );
}

entrarPrincipal(): void {
  this.router.navigate(['/tela-principal']);
}

entrarExibirFuncionarios(): void {

  this.router.navigate(['/exibir-funcionarios']);
}

}
