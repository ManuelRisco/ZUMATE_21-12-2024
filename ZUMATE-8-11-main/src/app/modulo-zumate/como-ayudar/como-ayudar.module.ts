import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComoAyudarRoutingModule } from './como-ayudar-routing.module';
import { ComoAyudarComponent } from './como-ayudar.component';
import { VoluntariadoModule } from './voluntariado/voluntariado.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DonacionesModule } from './donaciones/donaciones.module';

@NgModule({
  declarations: [
    ComoAyudarComponent
  ],
  imports: [
    CommonModule,
    ComoAyudarRoutingModule,
    VoluntariadoModule,
    ReactiveFormsModule,
    DonacionesModule
  ]
})
export class ComoAyudarModule { }
