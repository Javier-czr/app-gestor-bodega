import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {

  dataSupplier:any;
  listSuppliers:any;

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private menuctrl : MenuController,) {
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.dataSupplier = this.router.getCurrentNavigation()?.extras.state?.["supplier"];
        this.listSuppliers = this.router.getCurrentNavigation()?.extras.state?.["listSuppliers"];
        console.log(this.dataSupplier)
      }
    }
    );
  }

  ngOnInit() {

  }

  onSearchChange(event: any){
    console.log(event.detail.value);
  }

  clearSupplier(){
    for (var [key, value] of Object.entries(this.dataSupplier)) {
      Object.defineProperty(this.dataSupplier,key,{value:""})
    }
  }

  modifiedSupplier(){
    this.router.navigate(['/registrar-proveedor'],{state:{supplier:this.dataSupplier}});
  }

  // Función para mostrar el menú
  mostrarMenu() {
    this.menuctrl.open('first');
  }
}
