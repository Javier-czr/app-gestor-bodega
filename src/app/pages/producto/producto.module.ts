import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BuscadorComponent } from 'src/app/components/buscador/buscador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
    ComponentsModule,
    BuscadorComponent
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
