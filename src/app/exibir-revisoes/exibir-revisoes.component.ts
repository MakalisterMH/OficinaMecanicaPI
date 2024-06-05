import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RevisaoService } from '../revisao.service';

@Component({
  selector: 'app-exibir-revisoes',
  templateUrl: './exibir-revisoes.component.html',
  styleUrls: ['./exibir-revisoes.component.css']
})
export class ExibirRevisoesComponent implements OnInit {

  revisoesDetalhadas: { [placa: string]: any } = {}; // Objeto para armazenar os detalhes das revisões por placa
  placasRevisoes: any[] = []; // Lista para armazenar as placas das revisões
  listaPlacas: string[] = []; // Lista para armazenar apenas as placas

  constructor(private router: Router, private revisaoService: RevisaoService) { }

  ngOnInit() {
    this.placaParaLista();
  }

  // Método para percorrer todas as placas e carregar os detalhes da revisão para cada uma
  carregarDetalhesRevisoes() {
    this.listaPlacas.forEach(placa => {
      this.loadRevisaoDetalhada(placa);
    });
  }

  // Método para carregar todas as placas das revisões em uma lista
  placaParaLista() {
    this.revisaoService.placaParaLista().subscribe(placas => {
      this.placasRevisoes = placas;
      console.log('Placas das revisões:', this.placasRevisoes); // Imprime todas as placas no console
      this.listaPlacas = this.placasRevisoes.map(revisao => revisao.placa); // Extrai apenas as placas
      console.log('Lista de placas:', this.listaPlacas); // Imprime a lista de placas no console

      // Após carregar a lista de placas, chamamos o método para carregar os detalhes da revisão para cada placa
      this.carregarDetalhesRevisoes();
    });
  }

  // Método para carregar os detalhes da revisão com base na placa
  loadRevisaoDetalhada(placa: string) {
    this.revisaoService.getRevisaoDetalhada(placa).subscribe(data => {
      this.revisoesDetalhadas[placa] = data; // Armazena os detalhes da revisão no objeto usando a placa como chave
    });
  }

  entrarPrincipal() {
    this.router.navigate(['/tela-principal']);
  }
}
