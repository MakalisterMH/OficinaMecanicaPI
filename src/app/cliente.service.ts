import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private apiUrl = 'http://localhost:8080/clientes';
  private cliente: any;

  constructor(private http: HttpClient) { }


cadastrarCliente(cliente: any): Observable<any>{
  return this.http.post<any>(this.apiUrl, cliente)
  .pipe(
    catchError(error => {
      throw error;
    })
  );
}

atualizarCliente(cliente: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${cliente.id}`, cliente)
    .pipe(
      catchError(error => {
        throw error;
      })
    );
}


setCliente(cliente: any): void {
  this.cliente = cliente;
}

getCliente(): any {
  return this.cliente;
}

clearCliente(): void {
  this.cliente = null;
}
}
