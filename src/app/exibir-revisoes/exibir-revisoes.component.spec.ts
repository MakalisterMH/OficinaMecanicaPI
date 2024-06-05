import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirRevisoesComponent } from './exibir-revisoes.component';

describe('ExibirRevisoesComponent', () => {
  let component: ExibirRevisoesComponent;
  let fixture: ComponentFixture<ExibirRevisoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibirRevisoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirRevisoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
