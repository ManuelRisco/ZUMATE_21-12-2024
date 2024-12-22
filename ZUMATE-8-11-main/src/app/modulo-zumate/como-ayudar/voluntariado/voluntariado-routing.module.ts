import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntariadoComponent } from './voluntariado.component';
import { ChocolatadaComponent } from './chocolatada/chocolatada.component';
import { EventosComponent } from './eventos/eventos.component';
import { ProgramaPasantiaComponent } from './programa-pasantia/programa-pasantia.component';

const routes: Routes = [
  { path: '', component: VoluntariadoComponent },
  { path: 'chocolatada', component: ChocolatadaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'programa-pasantia', component: ProgramaPasantiaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariadoRoutingModule { }
