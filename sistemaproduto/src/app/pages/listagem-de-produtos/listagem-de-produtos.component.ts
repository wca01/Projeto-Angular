import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-listagem-de-produtos',
  templateUrl: './listagem-de-produtos.component.html',
  styleUrls: ['./listagem-de-produtos.component.css']
})
export class ListagemDeProdutosComponent implements OnInit {

  produto = {} as Produto;
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }
  ngOnInit(): void {
      
  this.produtoService.buscaProdutos().subscribe((produtos: Produto[]) => {
    this.produtos = produtos
  })
  }
}