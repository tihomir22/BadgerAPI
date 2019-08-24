import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseLandingComponent } from "./base-landing/base-landing.component";

const routes: Routes = [
  {
    path: "",
    component: BaseLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
