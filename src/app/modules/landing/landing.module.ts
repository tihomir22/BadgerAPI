import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { BaseLandingComponent } from "./base-landing/base-landing.component";
import { AvatarModule } from "ngx-avatar";
import { HttpClientModule } from "@angular/common/http";
import { RespuestaDocumentacionComponent } from "./secciones/respuesta-documentacion/respuesta-documentacion.component";
import { PrismModule } from '@ngx-prism/core';
import { EjemploGithub01Component } from './secciones/ejemplo-github01/ejemplo-github01.component';
import { AboutUsComponent } from './secciones/about-us/about-us.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

@NgModule({
  declarations: [BaseLandingComponent, RespuestaDocumentacionComponent, EjemploGithub01Component, AboutUsComponent, ContactoComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HttpClientModule,
    AvatarModule,
    PrismModule
  ]
})
export class LandingModule {}
