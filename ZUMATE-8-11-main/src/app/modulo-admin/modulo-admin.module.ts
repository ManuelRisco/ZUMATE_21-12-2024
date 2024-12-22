import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloAdminRoutingModule } from './modulo-admin-routing.module';
import { ModuloAdminComponent } from './modulo-admin.component';
import { ListaChocolatadaComponent } from './lista-chocolatada/lista-chocolatada.component';
import { ListaEventoComponent } from './lista-evento/lista-evento.component';
import { ListaPasantiaComponent } from './lista-pasantia/lista-pasantia.component';
import { ListaPatrocinarComponent } from './lista-patrocinar/lista-patrocinar.component';
import { ListaPresencialComponent } from './lista-presencial/lista-presencial.component';
import { ListaReclamacionesComponent } from './lista-reclamaciones/lista-reclamaciones.component';
import { ListaRecoleccionComponent } from './lista-recoleccion/lista-recoleccion.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule si usas ngModel
import { HomeComponent } from './home/home.component';
import { AgregacionLogosComponent } from './agregacion-logos/agregacion-logos.component';
@NgModule({
  declarations: [
    ModuloAdminComponent,
    ListaChocolatadaComponent,
    ListaEventoComponent,
    ListaPasantiaComponent,
    ListaPatrocinarComponent,
    ListaPresencialComponent,
    ListaReclamacionesComponent,
    ListaRecoleccionComponent,
    RegistroAdminComponent,
    ListaContactosComponent,
    HomeComponent,
    AgregacionLogosComponent
  ],
  imports: [
    CommonModule,
    ModuloAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule // Añadir FormsModule si es necesario
  ]
})
export class ModuloAdminModule { }
