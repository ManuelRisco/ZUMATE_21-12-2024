import { Component, OnInit } from '@angular/core';
import { ParticipantesService } from './participantes.service';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.css']
})
export class NuestroEquipoComponent implements OnInit {
  aliados: any[] = [];

  constructor(private participantesService: ParticipantesService) { }

  ngOnInit(): void {
    this.getAliados();
  }

  // Obtener aliados desde la API
  getAliados(): void {
    this.participantesService.getParticipantes().subscribe(data => {
      this.aliados = data;  // Asumimos que la API devuelve un array de aliados
    });
  }
}
