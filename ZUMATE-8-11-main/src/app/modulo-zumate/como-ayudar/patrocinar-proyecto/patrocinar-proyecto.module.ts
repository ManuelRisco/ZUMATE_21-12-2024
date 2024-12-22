import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrocinarProyectoRoutingModule } from './patrocinar-proyecto-routing.module';
import { PatrocinarProyectoComponent } from './patrocinar-proyecto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatrocinarComponent } from './patrocinar/patrocinar.component';


@NgModule({
  declarations: [
    PatrocinarProyectoComponent,
    PatrocinarComponent
  ],
  imports: [
    CommonModule,
    PatrocinarProyectoRoutingModule,
    ReactiveFormsModule
  ]
})
export class PatrocinarProyectoModule { }
