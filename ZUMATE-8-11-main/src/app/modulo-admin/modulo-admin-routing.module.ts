import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloAdminComponent } from '../modulo-admin/modulo-admin.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { ListaPresencialComponent } from './lista-presencial/lista-presencial.component';
import { ListaRecoleccionComponent } from './lista-recoleccion/lista-recoleccion.component';
import { ListaPatrocinarComponent } from './lista-patrocinar/lista-patrocinar.component';
import { ListaChocolatadaComponent } from './lista-chocolatada/lista-chocolatada.component';
import { ListaPasantiaComponent } from './lista-pasantia/lista-pasantia.component';
import { ListaEventoComponent } from './lista-evento/lista-evento.component';
import { ListaReclamacionesComponent } from './lista-reclamaciones/lista-reclamaciones.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { HomeComponent } from './home/home.component';
import { AgregacionLogosComponent } from './agregacion-logos/agregacion-logos.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'registro-admin', component: RegistroAdminComponent },
  { path: 'lista-presencial', component: ListaPresencialComponent },
  { path: 'lista-recoleccion', component: ListaRecoleccionComponent },
  { path: 'lista-patrocinar', component: ListaPatrocinarComponent },
  { path: 'lista-chocolatada', component: ListaChocolatadaComponent },
  { path: 'lista-pasantia', component: ListaPasantiaComponent },
  { path: 'lista-evento', component: ListaEventoComponent },
  { path: 'lista-reclamaciones', component: ListaReclamacionesComponent },
  { path: 'lista-contacto', component: ListaContactosComponent},
  { path: 'lista-logos', component: AgregacionLogosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloAdminRoutingModule { }
