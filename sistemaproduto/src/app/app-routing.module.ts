import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemDeProdutosComponent } from './pages/listagem-de-produtos/listagem-de-produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroDeProdutosComponent } from './pages/cadastro-de-produtos/cadastro-de-produtos.component';
import { EdicaoDeProdutosComponent } from './pages/edicao-de-produtos/edicao-de-produtos.component';
import { ExcluirComponent } from './pages/excluir/excluir.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'produtos', component: ListagemDeProdutosComponent
  },
  {
    path: 'produtos/cadastrar', component: CadastroDeProdutosComponent
  },
  {
    path: 'produtos/editar', component: EdicaoDeProdutosComponent
  },
  {
    path: 'produtos/excluir', component: ExcluirComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
