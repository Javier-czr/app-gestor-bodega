import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEditarPerfilPage } from './modal-editar-perfil.page';

describe('ModalEditarPerfilPage', () => {
  let component: ModalEditarPerfilPage;
  let fixture: ComponentFixture<ModalEditarPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalEditarPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
