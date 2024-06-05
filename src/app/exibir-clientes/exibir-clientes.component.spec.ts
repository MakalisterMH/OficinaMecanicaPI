import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirClientesComponent } from './exibir-clientes.component';

describe('ExibirClientesComponent', () => {
  let component: ExibirClientesComponent;
  let fixture: ComponentFixture<ExibirClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibirClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
