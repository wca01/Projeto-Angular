import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeProdutosComponent } from './listagem-de-produtos.component';

describe('ListagemDeProdutosComponent', () => {
  let component: ListagemDeProdutosComponent;
  let fixture: ComponentFixture<ListagemDeProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemDeProdutosComponent]
    });
    fixture = TestBed.createComponent(ListagemDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
