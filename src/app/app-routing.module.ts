import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';


const routes: Routes = [
  {path:"paises", component:PaisesComponent},
  { path: '',   redirectTo: '/paises', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
