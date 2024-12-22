import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasComponent } from './programas/programas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NuestroEquipoComponent } from './nuestro-equipo/nuestro-equipo.component';
import { DonarComponent } from './donar/donar.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { LibroReclamacionesComponent } from './libro-reclamaciones/libro-reclamaciones.component';
import { TerminosUsoComponent } from './terminos-uso/terminos-uso.component';
import { TerminosPrivacidadComponent } from './terminos-privacidad/terminos-privacidad.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'como-ayudar', loadChildren: () => import('./como-ayudar/como-ayudar.module').then(m => m.ComoAyudarModule) },
  { path: 'sobre-nosotros', component: NuestroEquipoComponent},
  { path: 'programas', component: ProgramasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'donar', component: DonarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'libro-reclamaciones', component: LibroReclamacionesComponent},
  { path: 'terminos-uso', component: TerminosUsoComponent},
  { path: 'terminos-privacidad', component: TerminosPrivacidadComponent},
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloZumateRoutingModule { }
