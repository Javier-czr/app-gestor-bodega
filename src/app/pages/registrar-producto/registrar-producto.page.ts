import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.page.html',
  styleUrls: ['./registrar-producto.page.scss'],
})
export class RegistrarProductoPage implements OnInit {

  typeCategory:any[]=[
    {id:1,type:"Lacteos"},
    {id:2,type:"Carnes"},
    {id:3,type:"Verduras"},
    {id:4,type:"Frutas"},
    {id:5,type:"Granos"},
    {id:6,type:"Bebidas"},
    {id:7,type:"Otros"}
  ];

  typeOfState:any[]=[
    {id:1,type:"Seco"},
    {id:2,type:"Refigerado"},
    {id:3,type:"Congelado"},
  ];

  listProducts:any[]=[];

  product: any = {
    producto:"",
    proveedor:"",
    nro:"",
    cantidad:"",
    categoria:"",
    tipo:"",
  };

  field:any;


  constructor(private productosServices: ProductosService,
              private menuctrl : MenuController,
              public router: Router,
              public toastController: ToastController,
              public loadingController: LoadingController) {}

  ngOnInit() {

  }

  ingresarProducto(){
    console.log(this.product);
    if (this.validarProducto(this.product)) {
      this.listProducts.push(this.product);
      this.presentloading('Guardando...', 200);
      this.presentToast('top','Producto ingresado correctamente');
      console.log(this.listProducts);
      let navigationextras: NavigationExtras={
        state:{
          product: this.product,
          listProduct: this.listProducts 
        }
      }
      this.router.navigate(['/producto'],navigationextras);
    }else{
      this.presentToast('top','Debe ingresar el campo '+this.field, 2000);
    }
  }

  validarProducto(model:any){
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
     duration: duration?duration:200,
   });

   await loading.present();
  }
  // Función para mostrar el menú
  mostrarMenu() {
    this.menuctrl.open('first');
  }

  clearProduct(){
    this.product={}
  }

  viewListProducts(){
    console.log(this.productosServices.listProduct);
  }
}
