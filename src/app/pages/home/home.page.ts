import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: any;
  registroUser: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public alertController: AlertController,
              public menuCtrl: MenuController) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuario = this.router.getCurrentNavigation()?.extras.state?.["user"];
        this.registroUser = this.router.getCurrentNavigation()?.extras.state?.["registerUser"];
        console.log(this.usuario);
        console.log(this.registroUser);
      }
    });
  }

  ngOnInit() {

  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }
}
