import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloZumateRoutingModule } from './modulo-zumate-routing.module';
import { ModuloZumateComponent } from './modulo-zumate.component';
import { IndexComponent } from './index/index.component';
import { NuestroEquipoComponent } from './nuestro-equipo/nuestro-equipo.component';
import { ProgramasComponent } from './programas/programas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DonarComponent } from './donar/donar.component';
import { LoginComponent } from './login/login.component';
import { LibroReclamacionesComponent } from './libro-reclamaciones/libro-reclamaciones.component';
import { TerminosUsoComponent } from './terminos-uso/terminos-uso.component';
import { TerminosPrivacidadComponent } from './terminos-privacidad/terminos-privacidad.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModuloZumateComponent,
    IndexComponent,
    NuestroEquipoComponent,
    ProgramasComponent,
    ContactoComponent,
    DonarComponent,
    LoginComponent,
    LibroReclamacionesComponent,
    TerminosUsoComponent,
    TerminosPrivacidadComponent,
  ],
  imports: [
    CommonModule,
    ModuloZumateRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuloZumateModule { }
