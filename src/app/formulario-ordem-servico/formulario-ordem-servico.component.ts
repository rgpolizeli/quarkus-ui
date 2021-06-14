import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray  } from '@angular/forms';
import {formatDate} from '@angular/common';
import {DateFormat, DateFormatView, PostoColetaId} from '../global-variables';
import {OrdemServico, Protocolo, ServerError, UnknownError, InvalidPostoColetaError, InvalidExameError, InvalidCRMError, InvalidCPFError, InvalidConvenioError} from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-ordem-servico',
  templateUrl: './formulario-ordem-servico.component.html',
  styleUrls: ['./formulario-ordem-servico.component.css']
})
export class FormularioOrdemServicoComponent implements OnInit {
	
	
	/////////////////////
	// VARIABLES
	
	formularioOrdemServico : FormGroup = new FormGroup({});
	examesDataSource : Array<Exame> = [];
	selectedExamesIds : Array<number> = [];
	
	unknownErrorMessage: string = '';
	invalidCPFErrorMessage: string = '';
	invalidCRMErrorMessage: string = '';
	invalidConvenioErrorMessage: string = '';
	invalidExameErrorMessage: string = '';
	loadExamesErrorMessage : string = '';
	
	
	
	//////////////////////////////
	// CONSTRUCTOR AND NGONINIT //
	
	constructor(
		private route : ActivatedRoute,
		private router: Router
	) {}
	
	ngOnInit() {
		this.formularioOrdemServico = this.createFormGroup();
	}
	
	
	
	/////////////////////////////////
	// FORM METHODS AND INITIATION //
	
	private createFormGroup() : FormGroup{
		return new FormGroup({
			cpf: new FormControl(''),
			convenio: new FormControl(''),
			crm: new FormControl('')
		});
	}
	
	get cpf(): any {
		return this.formularioOrdemServico.get('cpf');
	}
	get convenio(): any {
		return this.formularioOrdemServico.get('convenio');
	}
	get crm(): any {
		return this.formularioOrdemServico.get('crm');
	} 
	
	
	
	
	////////////////////
	// EVENTS ON FORM //
	
	onCheckboxChange(e:any) {
	}
  
	onSubmitFormularioOrdemServico(){
	}
	
	
	
	
	////////////////////////
	// API RETURN HANDLES //
	
	
	
	///////////////////////
	// AUXILIATY METHODS //
	
	private getCurrentDate() : string{
		return formatDate(new Date(), DateFormat, 'en');
	}

}
