import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: any = {};

  constructor(private http: HttpClient, private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
    if (this.cliente) {
      console.log('Cliente recebido:', this.cliente);
    } else {
      console.log('Nenhum cliente recebido');
    }
  }

  atualizarCliente(): void {
    this.clienteService.atualizarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente atualizado com sucesso:', response);
        this.router.navigate(['/exibir-clientes']);
        this.clienteService.clearCliente();
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
