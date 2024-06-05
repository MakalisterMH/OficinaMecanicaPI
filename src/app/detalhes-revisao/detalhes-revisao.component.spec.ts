import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesRevisaoComponent } from './detalhes-revisao.component';

describe('DetalhesRevisaoComponent', () => {
  let component: DetalhesRevisaoComponent;
  let fixture: ComponentFixture<DetalhesRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesRevisaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
