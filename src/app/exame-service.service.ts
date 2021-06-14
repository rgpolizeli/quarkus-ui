import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Exame {
  id: number;
  descricao: string;
  preco: number
}

@Injectable({
  providedIn: 'root'
})
export class ExameServiceService {

  constructor(private http: HttpClient) { }
  
  getExames	(): Observable<any> {
    return this.http.get<Exame>("/exame").pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  
}
