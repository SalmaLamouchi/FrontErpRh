// Personnel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Personnel } from 'src/app/models/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  private apiUrl = 'http://localhost:5050/gateway'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getPersonnels(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(`${this.apiUrl}/personnels`).pipe(
      catchError(this.handleError)
    );
  }

  getPersonnelById(id: number): Observable<Personnel> {
    return this.http.get<Personnel>(`${this.apiUrl}/personnels/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addPersonnel(Personnel: Personnel): Observable<Personnel> {
    return this.http.post<Personnel>(`${this.apiUrl}/PersonnelsMaj`, Personnel).pipe(
      catchError(this.handleError)
    );
  }

  updatePersonnel(Personnel: Personnel): Observable<Personnel> {
    return this.http.put<Personnel>(`${this.apiUrl}/UpdC`, Personnel).pipe(
      catchError(this.handleError)
    );
  }

  deletePersonnel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DelClt/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the error as needed
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
