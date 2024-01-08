import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { ProveedoresService } from 'src/app/proveedores.service';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.page.html',
  styleUrls: ['./registrar-proveedor.page.scss'],
})
export class RegistrarProveedorPage implements OnInit {

  listSuppliers:any[]=[]

  supplier: any = {
    nombre:"",
    apellido:"",
    rut:"",
    empresa:"",
    cantidadProductos:"",
  }

  field:any;

  constructor(private proveedoresServices: ProveedoresService,
              private menuctrl : MenuController,
              public router: Router,
              public toastController: ToastController,
              public loadingController: LoadingController) {}

  ngOnInit() {
    
  }


  ingresarProveedor(){
    console.log(this.supplier);
    if (this.validarProveedor(this.supplier)) {
      this.proveedoresServices.addSupplier(this.supplier);
      this.clearSupplier();
      this.presentloading('Guardando...', 200);
      this.presentToast('top','Proveedor ingresado correctamente');
      this.viewListSuppliers();
      let navigationextras: NavigationExtras={
        state:{
          supplier: this.supplier,
          listSuppliers: this.listSuppliers
        }
      }
      this.router.navigate(['/proveedor'],navigationextras);
    }else
      this.presentToast('top','Debe llenar el campo '+this.field, 2000);
  }

  mostrarMenu() {
    this.menuctrl.open('first');
  }

  clearSupplier(){
    this.supplier={}
  }

  viewListSuppliers(){
    console.log(this.proveedoresServices.listSupplier);
  }

  validarProveedor(model:any){
    for(var [key,value] of Object.entries(model)){
      if(value==""){
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
    duration: duration?duration:200,
   });
   await loading.present();
  }
}
