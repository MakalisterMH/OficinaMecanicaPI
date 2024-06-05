import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirVeiculosComponent } from './exibir-veiculos.component';

describe('ExibirVeiculosComponent', () => {
  let component: ExibirVeiculosComponent;
  let fixture: ComponentFixture<ExibirVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibirVeiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
