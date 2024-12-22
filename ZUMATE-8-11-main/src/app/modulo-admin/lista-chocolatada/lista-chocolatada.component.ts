import { Component, OnInit } from '@angular/core';
import { ParticipantesService } from './participantes.service';

@Component({
  selector: 'app-lista-chocolatada',
  templateUrl: './lista-chocolatada.component.html',
  styleUrls: ['./lista-chocolatada.component.css']
})
export class ListaChocolatadaComponent implements OnInit {
  participantes: any[] = [];

  constructor(private participantesService: ParticipantesService) { }

  ngOnInit(): void {
    this.getParticipantes();
  }

  // Método para obtener la lista de participantes
  getParticipantes(): void {
    this.participantesService.getParticipantes().subscribe(data => {
      this.participantes = data;
    });
  }

  // Método para eliminar un participante
  deleteParticipante(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta imagen?')) {
      this.participantesService.deleteParticipante(id).subscribe(response => {
        console.log(response);  // Para verificar la respuesta de la eliminación
        if (response.status === 'success') {
          alert('Participante eliminado exitosamente');
          this.getParticipantes();  // Recargar la lista de participantes
        } else {
          alert('Error al eliminar el participante');
        }
      });
    }
  }
  
  // Método para actualizar la tabla
  refreshTable(): void {
    this.getParticipantes(); // Llamar a getParticipantes para actualizar la lista
  }
}
