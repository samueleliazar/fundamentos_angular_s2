import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', 
    component:HomeComponent
  },
  {
    path: 'home', 
    component:HomeComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'ayuda',
    component:AyudaComponent
  },
  {
    path: '**', 
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
