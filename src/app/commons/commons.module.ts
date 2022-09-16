import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material/material.module";
import { BcpComponents } from "./components";
import { ModalsComponents } from "./modals";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [...BcpComponents, ...ModalsComponents],
  exports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...BcpComponents,
    ...ModalsComponents,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class BcpCommonsModule {}
