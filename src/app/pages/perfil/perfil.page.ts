import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ModalEditarPerfilPage } from '../modal-editar-perfil/modal-editar-perfil.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  registroUser: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public alertController: AlertController,
              public menuCtrl: MenuController,
              public modalController: ModalController) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.registroUser = this.router.getCurrentNavigation()?.extras.state?.["registerUser"];
        console.log(this.registroUser);
      }
    });
  }

  ngOnInit() {

  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

  async modalEditar() {
    const modal = await this.modalController.create({
      component: ModalEditarPerfilPage,
      cssClass: 'my-custom-class',
      componentProps: {
        usuario: this.registroUser.usuario,
        nombre: this.registroUser.nombre,
        apellido: this.registroUser.apellido,
        telefono: this.registroUser.telefono,
        correo: this.registroUser.correo,
        contrasena: this.registroUser.contrasena
      }
    });

    return await modal.present();

  }

}
