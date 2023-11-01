import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoDeProdutosComponent } from './edicao-de-produtos.component';

describe('EdicaoDeProdutosComponent', () => {
  let component: EdicaoDeProdutosComponent;
  let fixture: ComponentFixture<EdicaoDeProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoDeProdutosComponent]
    });
    fixture = TestBed.createComponent(EdicaoDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
