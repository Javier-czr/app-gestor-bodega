import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarProveedorPage } from './registrar-proveedor.page';

describe('RegistrarProveedorPage', () => {
  let component: RegistrarProveedorPage;
  let fixture: ComponentFixture<RegistrarProveedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
