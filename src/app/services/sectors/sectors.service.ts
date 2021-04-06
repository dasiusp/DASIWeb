import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    const url = `${apiUrl}/get-members`;
    return this.http.get(url).pipe(
      tap(_ => {}),
      catchError(this.handleError(`deu ruim`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
