import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DocumentationRoutingModule } from "./documentation-routing.module";
import { DocumentationWrapperComponent, SafePipe } from "./documentation-wrapper/documentation-wrapper.component";

@NgModule({
  declarations: [DocumentationWrapperComponent,SafePipe],
  imports: [CommonModule, DocumentationRoutingModule],
  schemas: []
})
export class DocumentationModule {}
