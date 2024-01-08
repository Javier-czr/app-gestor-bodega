import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:"",
    contrasena:""
  }

  field:any;
  constructor(public router: Router,
              public toastController: ToastController,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.user);
    if (this.validarUsuario(this.user)) {
      this.presentloading('Ingresando...', 200);
      this.presentToast('top','Bienvenido '+this.user.usuario);
      let navigationextras: NavigationExtras={
        state:{
          user: this.user
        }
      }
      this.router.navigate(['/home'],navigationextras);
    }else{
      this.presentToast('middle','Falta: '+this.field, 5000)
    }
  }

  validarUsuario(model:any){
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

    async presentloading(message: string,
                         duration?:number) {
    const loading = await this.loadingController.create({
      message: message,
      duration: duration?duration:2500,
    });

    await loading.present();
  }

}
