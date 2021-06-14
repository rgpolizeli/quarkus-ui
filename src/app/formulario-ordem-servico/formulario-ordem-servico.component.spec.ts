import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOrdemServicoComponent } from './formulario-ordem-servico.component';

describe('FormularioOrdemServicoComponent', () => {
  let component: FormularioOrdemServicoComponent;
  let fixture: ComponentFixture<FormularioOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioOrdemServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
