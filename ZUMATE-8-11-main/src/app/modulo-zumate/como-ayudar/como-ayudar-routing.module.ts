import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoAyudarComponent } from './como-ayudar.component';

const routes: Routes = [
  { path: '', component: ComoAyudarComponent },
  { path: 'voluntariado', loadChildren: () => import('./voluntariado/voluntariado.module').then(m => m.VoluntariadoModule) },
  { path: 'donaciones', loadChildren: () => import('./donaciones/donaciones.module').then(m => m.DonacionesModule) },
  { path: 'patrocinar-proyecto', loadChildren: () => import('./patrocinar-proyecto/patrocinar-proyecto.module').then(m => m.PatrocinarProyectoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComoAyudarRoutingModule { }
