import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioOrdemServicoComponent } from './formulario-ordem-servico/formulario-ordem-servico.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioOrdemServicoComponent,
    ProtocoloComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	 AppRoutingModule,
	FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
