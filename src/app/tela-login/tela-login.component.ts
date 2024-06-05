import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {

  constructor(private router: Router) { }

  cpfInput: string = '';
  senhaInput: string = '';

  usuarioTeste = {
    cpf: '123',
    senha: '123'
  }


  abrirTelaPrincipal() {
    if (this.usuarioTeste.cpf === this.cpfInput && this.usuarioTeste.senha === this.senhaInput) {
      this.router.navigate(['/tela-principal']);
    } else {
      alert('CPF ou senha incorretos');
    }


  }

}
