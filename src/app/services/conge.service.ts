// conge.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Conge } from 'src/app/models/conge';
@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:5050/gateway'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiUrl}/conges`).pipe(
      catchError(this.handleError)
    );
  }

  getCongeById(id: number): Observable<Conge> {
    return this.http.get<Conge>(`${this.apiUrl}/conges/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addConge(conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(`${this.apiUrl}/CongesMaj`, conge).pipe(
      catchError(this.handleError)
    );
  }

  updateConge(conge: Conge): Observable<Conge> {
    return this.http.put<Conge>(`${this.apiUrl}/UpdConge`, conge).pipe(
      catchError(this.handleError)
    );
  }

  deleteConge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DelConge/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the error as needed
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
