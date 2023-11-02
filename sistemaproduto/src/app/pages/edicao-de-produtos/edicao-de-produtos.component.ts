import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-edicao-de-produtos',
  templateUrl: './edicao-de-produtos.component.html',
  styleUrls: ['./edicao-de-produtos.component.css']
})
export class EdicaoDeProdutosComponent implements OnInit {
  produto = {} as Produto;
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  buscaProdutos(): void {
    this.produtoService.buscaProdutos()
    .subscribe(produtos => this.produtos = produtos);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.produtoService.salvaProduto({ nome } as Produto)
      .subscribe(produto => {
        this.produtos.push(produto);
      });
  }
}
