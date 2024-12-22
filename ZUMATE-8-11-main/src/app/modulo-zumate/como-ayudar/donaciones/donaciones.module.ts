import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { DonacionesComponent } from './donaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EntregaPresencialComponent } from './entrega-presencial/entrega-presencial.component';
import { RecoleccionDomicilioComponent } from './recoleccion-domicilio/recoleccion-domicilio.component';


@NgModule({
  declarations: [
    DonacionesComponent,
    EntregaPresencialComponent,
    RecoleccionDomicilioComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DonacionesModule { }
