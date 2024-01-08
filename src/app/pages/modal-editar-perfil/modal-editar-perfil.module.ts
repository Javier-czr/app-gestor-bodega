import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarPerfilPageRoutingModule } from './modal-editar-perfil-routing.module';

import { ModalEditarPerfilPage } from './modal-editar-perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarPerfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalEditarPerfilPage]
})
export class ModalEditarPerfilPageModule {}
