import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarProductoPageRoutingModule } from './registrar-producto-routing.module';

import { RegistrarProductoPage } from './registrar-producto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarProductoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistrarProductoPage]
})
export class RegistrarProductoPageModule {}
