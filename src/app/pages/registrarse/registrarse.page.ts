import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {


  registerUser={
    usuario:"",
    nombre:"",
    apellido:"",
    telefono:"",
    correo:"",
    contrasena:""
  }

  field:any;
  
  constructor(public router: Router,
              public toastController: ToastController) { }

  ngOnInit() {
  }

  registrar(){
    console.log(this.registerUser);
    if (this.validarRegistro(this.registerUser)) {
      this.presentToast('bottom','Usuario '+this.registerUser.usuario+' registrado');
      let navigationextras: NavigationExtras={
        state:{
          registerUser: this.registerUser
        }
      }
      this.router.navigate(['/perfil'],navigationextras);
    }else{
      this.presentToast('bottom','Falta: '+this.field, 5000)
    }
  }

  validarRegistro(model:any){
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
