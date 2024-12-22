import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost/ejemplo/contacto.php';  // URL del backend para entrega presencial

  constructor(private http: HttpClient) { }

  // Método para enviar el formulario
  enviarFormulario(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(
      map((response) => {
        console.log('Respuesta del servidor:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  // Método para manejar errores HTTP
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ha ocurrido un error inesperado';
    if (error.error instanceof ErrorEvent) {
      // Error en el lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error en el servidor
      errorMessage = `Código de error: ${error.status}, Mensaje: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));  // Lanza el error para que lo manejes en el componente
  }
}
