import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/service/produto.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-de-produtos',
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrls: ['./cadastro-de-produtos.component.css']
})
export class CadastroDeProdutosComponent implements OnInit {

  produto = {} as Produto;
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private location: Location) {}
  
  ngOnInit() {
    this.buscaProdutos();
  }


  salvaProduto(form: NgForm) {
    if (this.produto.nome!== undefined) {
      this.produtoService.atualizaProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.produtoService.salvaProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

   buscaProdutos() {
    this.produtoService.buscaProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  cleanForm(form: NgForm) {
    this.buscaProdutos();
    form.resetForm();
    this.produto = {} as Produto;
  }

  goBack(): void {
    this.location.back();
  }

}
