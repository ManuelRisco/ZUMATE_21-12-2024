import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntariadoRoutingModule } from './voluntariado-routing.module';
import { VoluntariadoComponent } from './voluntariado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChocolatadaComponent } from './chocolatada/chocolatada.component';
import { EventosComponent } from './eventos/eventos.component';
import { ProgramaPasantiaComponent } from './programa-pasantia/programa-pasantia.component';


@NgModule({
  declarations: [
    VoluntariadoComponent,
    ChocolatadaComponent,
    EventosComponent,
    ProgramaPasantiaComponent
  ],
  imports: [
    CommonModule,
    VoluntariadoRoutingModule,
    ReactiveFormsModule,

  ]
})
export class VoluntariadoModule { }
