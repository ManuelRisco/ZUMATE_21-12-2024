import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ParticipantesService {
    private apiUrl = 'http://localhost/api/aliados';  // URL base para la API
  
    constructor(private http: HttpClient) { }
  
    // Obtener lista de participantes
    getParticipantes(): Observable<any> {
      return this.http.get(`${this.apiUrl}/getAliado.php`); 
    }
  }
  