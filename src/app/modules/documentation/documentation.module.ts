import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DocumentationRoutingModule } from "./documentation-routing.module";
import { DocumentationWrapperComponent } from "./documentation-wrapper/documentation-wrapper.component";
import { NgWrapperModule } from "projects/documentation/ng-wrapper/ng-wrapper.module";

@NgModule({
  declarations: [DocumentationWrapperComponent],
  imports: [CommonModule, DocumentationRoutingModule, NgWrapperModule],
  schemas: []
})
export class DocumentationModule {}
