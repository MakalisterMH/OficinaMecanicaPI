import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

    private apiUrl = 'http://localhost:8080/veiculos';
    private veiculo: any;
  
    constructor(private http: HttpClient) { }
  
    cadastrarVeiculo(veiculo: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, veiculo)
        .pipe(
          catchError(error => {
            throw error;
          })
        );
    }

    atualizarVeiculo(veiculo: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${this.veiculo.id}`, this.veiculo)
        .pipe(
          catchError(error => {
            throw error;
          })
        );
    }

    setVeiculo(veiculo: any): void {
      this.veiculo = veiculo;
    }
    
    getVeiculo(): any {
      return this.veiculo;
    }
    
    clearVeiculo(): void {
      this.veiculo = null;
    }

}



