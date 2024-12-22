import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloZumateModule } from './modulo-zumate/modulo-zumate.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComoAyudarModule } from './modulo-zumate/como-ayudar/como-ayudar.module';
import { ChatbotComponent } from './shared/chatbot/chatbot.component';
import { DonacionesModule } from './modulo-zumate/como-ayudar/donaciones/donaciones.module';
import { PatrocinarProyectoModule } from './modulo-zumate/como-ayudar/patrocinar-proyecto/patrocinar-proyecto.module';
import { VoluntariadoModule } from './modulo-zumate/como-ayudar/voluntariado/voluntariado.module';
import { ModuloAdminModule } from './modulo-admin/modulo-admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloZumateModule,
    ComoAyudarModule,
    DonacionesModule,
    PatrocinarProyectoModule,
    VoluntariadoModule,
    ModuloAdminModule,
    HttpClientModule, // Asegúrate de importar HttpClientModule aquí
    FormsModule // Asegúrate de importar FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
