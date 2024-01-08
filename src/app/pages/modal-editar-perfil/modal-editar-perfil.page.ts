import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.page.html',
  styleUrls: ['./modal-editar-perfil.page.scss'],
})
export class ModalEditarPerfilPage implements OnInit {

  usuario: any;
  nombre: any;
  apellido: any;
  telefono: any;
  correo: any;
  contrasena: any;

  editarUser={
    usuario:"",
    nombre:"",
    apellido:"",
    telefono:"",
    correo:"",
    contrasena:""
  }
  
  field: any;

  constructor(private modalCtrl: ModalController,
              private toastController: ToastController) {
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.usuario);
    if (this.validarEditar(this.editarUser)) {
      this.presentToast('bottom','Usuario '+this.editarUser.usuario+' editado');
      let navigationextras: NavigationExtras={
        state:{
          editarUser: this.editarUser
        }
      }
      this.modalCtrl.dismiss();
    }else{
      this.presentToast('bottom','Falta: '+this.field, 5000)
    }
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  validarEditar(model:any){
    for(var [key, value] of Object.entries(model)){
      if (value=="") {
        this.field=key;
        return false;
      }      
    }
    return true;
  }

    async presentToast(position: 'top' | 'middle' | 'bottom',
                     message: string,
                     duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }


}
