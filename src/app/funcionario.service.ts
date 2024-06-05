import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'http://localhost:8080/funcionarios';
  private funcionario: any;

  constructor(private http: HttpClient) { }

  cadastrarFuncionario(funcionario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, funcionario)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

  atualizarFuncionario(funcionario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${funcionario.id}`, funcionario)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  
  
  setFuncionario(funcionario: any): void {
    this.funcionario = funcionario;
  }
  
  getFuncionario(): any {
    return this.funcionario;
  }
  
  clearFuncionario(): void {
    this.funcionario = null;
  }

  
}
