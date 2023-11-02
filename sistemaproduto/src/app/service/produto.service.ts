import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Produto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  buscaProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
    
  }

  salvaProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  atualizaProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletaProduto(produto: Produto): Observable<Produto> {
    return this.http.delete<Produto>(this.url + '/' + produto.nome, this.httpOptions)
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



