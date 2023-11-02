import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemDeProdutosComponent } from './pages/listagem-de-produtos/listagem-de-produtos.component';
import { CadastroDeProdutosComponent } from './pages/cadastro-de-produtos/cadastro-de-produtos.component';
import { EdicaoDeProdutosComponent } from './pages/edicao-de-produtos/edicao-de-produtos.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ExcluirComponent } from './pages/excluir/excluir.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemDeProdutosComponent,
    CadastroDeProdutosComponent,
    EdicaoDeProdutosComponent,
    HeaderComponent,
    HomeComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
