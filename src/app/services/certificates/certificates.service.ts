import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment.prod";

const { cleberUrl } = environment;

@Injectable({
  providedIn: "root",
})
export class CertificatesService {
  constructor(private http: HttpClient) {}

  getCertificate(certificateId: string): Observable<any> {
    const url = `${cleberUrl}/certificate/${certificateId}`;
    return this.http.get(url).pipe(
      tap((_) => {}),
      catchError(this.handleError(`deu ruim`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
