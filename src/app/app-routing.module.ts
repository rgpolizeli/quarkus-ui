import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioOrdemServicoComponent } from './formulario-ordem-servico/formulario-ordem-servico.component';

const routes: Routes = [{path: '', component: FormularioOrdemServicoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }