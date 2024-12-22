import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrocinarProyectoComponent } from './patrocinar-proyecto.component';
import { PatrocinarComponent } from './patrocinar/patrocinar.component';

const routes: Routes = [
  { path: '', component: PatrocinarProyectoComponent },
  { path: 'patrocinar', component: PatrocinarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrocinarProyectoRoutingModule { }
