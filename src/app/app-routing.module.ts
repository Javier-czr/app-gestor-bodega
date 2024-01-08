import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'registrar-producto',
    loadChildren: () => import('./pages/registrar-producto/registrar-producto.module').then( m => m.RegistrarProductoPageModule)
  },
  {
    path: 'registrar-proveedor',
    loadChildren: () => import('./pages/registrar-proveedor/registrar-proveedor.module').then( m => m.RegistrarProveedorPageModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./pages/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'modal-editar-perfil',
    loadChildren: () => import('./pages/modal-editar-perfil/modal-editar-perfil.module').then( m => m.ModalEditarPerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
