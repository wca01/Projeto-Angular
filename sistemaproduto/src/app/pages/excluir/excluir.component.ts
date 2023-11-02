import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{
  produto = {} as Produto;
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}
  
  ngOnInit(): void {
    this.buscaProdutos();
  }

  buscaProdutos(): void {
    this.produtoService.buscaProdutos()
    .subscribe(produtos => this.produtos = produtos);
  }

    delete(produto: Produto): void {
      this.produtos = this.produtos.filter(p => p !== produto);
      this.produtoService.deletaProduto(produto).subscribe();
    }
  }