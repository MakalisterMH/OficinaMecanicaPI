import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVeiculo2Component } from './cadastro-veiculo2.component';

describe('CadastroVeiculo2Component', () => {
  let component: CadastroVeiculo2Component;
  let fixture: ComponentFixture<CadastroVeiculo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroVeiculo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroVeiculo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
