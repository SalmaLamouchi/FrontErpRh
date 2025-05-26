// Paie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Paie } from '../models/paie';

// import { Paie } from '../models/Paie';

@Injectable({
  providedIn: 'root'
})
export class PaieService {
  private apiUrl = 'http://localhost:5050/gateway'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getPaies(): Observable<Paie[]> {
    return this.http.get<Paie[]>(`${this.apiUrl}/paies`).pipe(
      catchError(this.handleError)
    );
  }

  getPaieById(id: number): Observable<Paie> {
    return this.http.get<Paie>(`${this.apiUrl}/paies/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addPaie(Paie: Paie): Observable<Paie> {
    return this.http.post<Paie>(`${this.apiUrl}/PaiesMaj`, Paie).pipe(
      catchError(this.handleError)
    );
  }

  updatePaie(Paie: Paie): Observable<Paie> {
    return this.http.put<Paie>(`${this.apiUrl}/UpdPaie`, Paie).pipe(
      catchError(this.handleError)
    );
  }

  deletePaie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DelPaie/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the error as needed
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
