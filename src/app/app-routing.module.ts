import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioOrdemServicoComponent } from './formulario-ordem-servico/formulario-ordem-servico.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';

const routes: Routes = [
	{path: '', component: FormularioOrdemServicoComponent},
	{path: 'protocolo', component: ProtocoloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }