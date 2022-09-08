import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';
import { ContatoComponent } from './contato/contato.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes : Routes =  [
  { path: "primeira-pagina", component: PrimeiraPaginaComponent },
  { path: "conhecimentos", component: ConhecimentosComponent },
  { path: "projetos", component: ProjetosComponent },
  { path: "contato", component: ContatoComponent },
  { path: "", redirectTo: 'primeira-pagina', pathMatch: 'full'}
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
