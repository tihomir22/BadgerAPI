import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:'./modules/landing/landing.module#LandingModule'
  },
  {
    path:'docs',
    loadChildren:'./modules/documentation/documentation.module#DocumentationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
