import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirEventoComponent } from './modal-excluir-evento.component';

describe('ModalExcluirEventoComponent', () => {
  let component: ModalExcluirEventoComponent;
  let fixture: ComponentFixture<ModalExcluirEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluirEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcluirEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
