import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray  } from '@angular/forms';
import { ExameServiceService, Exame } from '../exame-service.service';
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
		private router: Router,
		public exameService: ExameServiceService,
	) {}
	
	ngOnInit() {
		this.loadExamesCheckBoxes();
		this.formularioOrdemServico = this.createFormGroup();
	}
	
	
	
	/////////////////////////////////
	// FORM METHODS AND INITIATION //
	
	private loadExamesCheckBoxes(){
		this.exameService.getExames().subscribe((resp: Array<Exame>) => {
			this.examesDataSource = resp.slice();
		});
	}
	
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

		if (e.target.checked) {
		  this.examesDataSource.forEach((exame: Exame) => {
			  
			if (exame.descricao === e.target.value) {
			  this.selectedExamesIds.push(exame.id);
			  return;
			}
		  });
		} else {
		  
		  this.examesDataSource.forEach((exame: Exame) => {
			if (exame.descricao === e.target.value) {
			  this.selectedExamesIds.splice(this.selectedExamesIds.indexOf(exame.id), 1);
			  return;
			}
		  });
		}
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
