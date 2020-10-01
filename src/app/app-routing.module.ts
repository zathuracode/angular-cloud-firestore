import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UsuariosListComponent } from './component/usuarios-list/usuarios-list.component';

const routes: Routes = [
  {path:'usuarios-list',component:UsuariosListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-form',component:ProductFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
