import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  private apiUrl = 'http://localhost/api/presencial';  // URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener lista de participantes
  getParticipantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getParticipantes.php`);
  }

  // Eliminar un participante por ID
  deleteParticipante(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteParticipante.php?id=${id}`);
  }
}
