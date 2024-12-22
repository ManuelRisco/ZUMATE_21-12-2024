import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionesComponent } from './donaciones.component';
import { EntregaPresencialComponent } from './entrega-presencial/entrega-presencial.component';
import { RecoleccionDomicilioComponent } from './recoleccion-domicilio/recoleccion-domicilio.component';

const routes: Routes = [
  { path: '', component: DonacionesComponent },
  { path: 'entrega-presencial', component: EntregaPresencialComponent },
  { path: 'recoleccion-domicilio', component: RecoleccionDomicilioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
