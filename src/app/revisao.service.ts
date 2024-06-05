import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevisaoService {


  private apiUrl = 'http://localhost:8080/revisoes';

  private apiUrlPlacas = 'http://localhost:8080/revisoes/placas';
  private apiUrlDetalhada = 'http://localhost:8080/revisoes/placa';
  
  constructor(private http: HttpClient) { }

  cadastrarRevisao(veiculo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, veiculo)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

  getPlacas(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrlPlacas);
  }

  getRevisaoDetalhada(placa: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlDetalhada}/${placa}`);
  }

// Método para obter todas as placas das revisões
placaParaLista(): Observable<string[]> {
  return this.http.get<string[]>(this.apiUrl);
}

}
