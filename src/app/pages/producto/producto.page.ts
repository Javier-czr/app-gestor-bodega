import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  dataProduct:any;
  listProducts:any;

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private menuctrl : MenuController,) {
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.dataProduct = this.router.getCurrentNavigation()?.extras.state?.["product"];
        this.listProducts = this.router.getCurrentNavigation()?.extras.state?.["listProducts"];
        console.log(this.dataProduct)
      }    
    });
  }

  ngOnInit() {

  }

  onSearchChange(event: any){
    console.log(event.detail.value);
  }

  clearProduct(){
    for (var [key, value] of Object.entries(this.dataProduct)) {
      Object.defineProperty(this.dataProduct,key,{value:""})
    }
  }

  modifiedProduct(){
    this.router.navigate(['/registrar-producto'],{state:{product:this.dataProduct}});
  }

  // Función para mostrar el menú
  mostrarMenu() {
    this.menuctrl.open('first');
  }
}
