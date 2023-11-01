import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Produto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  buscaProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
    
  }

  salvaProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  atualizaProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.url + '/' + produto.nome, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletaProduto(produto: Produto) {
    return this.httpClient.delete<Produto>(this.url + '/' + produto.nome, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}



