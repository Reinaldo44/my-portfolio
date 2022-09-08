import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { HeaderComponent } from './header/header.component';
import { FlooterComponent } from './flooter/flooter.component';
import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent,
    HeaderComponent,
    FlooterComponent,
    ConhecimentosComponent,
    ProjetosComponent,
    ContatoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
