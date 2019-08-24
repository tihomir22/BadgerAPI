import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentationWrapperComponent } from "./documentation-wrapper/documentation-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: DocumentationWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {}
