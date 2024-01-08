import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarProveedorPageRoutingModule } from './registrar-proveedor-routing.module';

import { RegistrarProveedorPage } from './registrar-proveedor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarProveedorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistrarProveedorPage]
})
export class RegistrarProveedorPageModule {}
