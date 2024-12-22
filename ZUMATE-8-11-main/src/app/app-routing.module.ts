import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modulo-zumate', loadChildren: () => import('./modulo-zumate/modulo-zumate.module').then(m => m.ModuloZumateModule) },
  { path: 'modulo-admin', loadChildren: () => import('./modulo-admin/modulo-admin.module').then(m => m.ModuloAdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
