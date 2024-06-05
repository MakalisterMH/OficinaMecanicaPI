import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RevisaoService } from '../revisao.service';

@Component({
  selector: 'app-cadastro-revisao',
  templateUrl: './cadastro-revisao.component.html',
  styleUrl: './cadastro-revisao.component.css'
})
export class CadastroRevisaoComponent {


  revisao = {
    placa: '',
    tipoRevisao: '',
    detalhesRevisao: '',
  };

  constructor(private router: Router, private revisaoService: RevisaoService,
    private http: HttpClient
  ) {}



  entrarPrincipal(): void {

    this.router.navigate(['/tela-principal']);
  }  


  cadastrarRevisao() {
    this.revisaoService.cadastrarRevisao(this.revisao)
      .subscribe(
        (response: any) => {
          console.log('Revisao cadastrado com sucesso:', response);
          alert('Revisao Cadastrado com sucesso.');
        },
        (error: any) => {
          console.error('Erro ao cadastrar Revisao:', error);
        }
      );

  } 

}
