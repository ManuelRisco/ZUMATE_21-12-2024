import { Component, OnInit } from '@angular/core';
import { ListaContactosService } from './lista-contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent implements OnInit{
  contactos: any[] = [];

  constructor(private contactoService: ListaContactosService) { }

  ngOnInit(): void {
    this.getParticipantes();
  }

  // Método para obtener la lista de participantes
  getParticipantes(): void {
    this.contactoService.getParticipantes().subscribe(data => {
      this.contactos = data;
    });
  }

  // Método para eliminar un contacto
  deleteContacto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      this.contactoService.deleteParticipante(id).subscribe(response => {
        console.log(response);  // Para verificar la respuesta de la eliminación
        if (response.status === 'success') {
          alert('Contacto eliminado exitosamente');
          this.getParticipantes();  // Recargar la lista de contactos
        } else {
          alert('Error al eliminar el contacto');
        }
      });
    }
  }
  // Método para actualizar la tabla
  refreshTable(): void {
    this.getParticipantes(); // Llamar a getParticipantes para actualizar la lista
  }
}
