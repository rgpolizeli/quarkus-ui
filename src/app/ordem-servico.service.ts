import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {OrdemServico, Protocolo, ServerError, UnknownError, InvalidConvenioError, InvalidPostoColetaError, InvalidExameError, InvalidCRMError, InvalidCPFError} from './models';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  constructor(private http: HttpClient) { }
  
  createOrdemServico(ordem:OrdemServico): Observable<any> {
    return this.http.post<Protocolo>("/ordem_servico",ordem).pipe(
      catchError(this.createErrorMessage)
    );
  }
  
  private createErrorMessage(error: HttpErrorResponse) : any {
	  
	  if (error.error instanceof ErrorEvent) {
			return throwError(new UnknownError());
	  } else {
		  switch (error.status) {
			case 400: 
				switch (error.error.code) {
					case 524: 
						return throwError(new InvalidCPFError());
					break;
					case 525: 
						return throwError(new InvalidCRMError());
					break;
					case 526: 
						return throwError(new InvalidExameError());
					break;
					case 527: 
						return throwError(new InvalidPostoColetaError());
					break;
					case 528: 
						return throwError(new InvalidConvenioError());
					break;
					default: 
						return throwError(new UnknownError());
					break;
				}
			break;
			default: 
				return throwError(new UnknownError());
			break;
		  }
	  }
	
  }
  
  
}
