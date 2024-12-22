import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Institucion {
  id: number;
  nombre: string;
}

interface Carrera {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class PasantiaService {
  private apiUrlInsertarPasantia = 'http://localhost/ejemplo/insertar_pasantia.php';  // URL del backend para insertar la pasantía
  private apiUrlInstituciones = 'http://localhost/api/instituciones/obtener_instituciones.php';  // URL para obtener instituciones
  private apiUrlCarreras = 'http://localhost/api/carreras/obtener_carreras.php';  // URL para obtener carreras

  constructor(private http: HttpClient) {}

  enviarFormulario(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrlInsertarPasantia, data).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  obtenerInstituciones(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(this.apiUrlInstituciones).pipe(
      catchError(this.handleError)
    );
  }

  obtenerCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.apiUrlCarreras).pipe(
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
