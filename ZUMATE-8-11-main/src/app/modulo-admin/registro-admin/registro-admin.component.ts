import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantesService } from './participantes.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {
  participantes: any[] = [];
  participanteForm: FormGroup;
  isEditMode: boolean = false;  // Para saber si estamos en modo edición
  currentUserId: number | null = null;  // Para almacenar el ID del participante actual en edición

  constructor(private participantesService: ParticipantesService, private fb: FormBuilder) {
    // Crear el formulario reactivo con validaciones
    this.participanteForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener la lista de participantes al iniciar el componente
    this.getParticipantes();
  }

  // Obtener la lista de participantes
  getParticipantes(): void {
    this.participantesService.getParticipantes().subscribe({
      next: (data) => {
        this.participantes = data;
      },
      error: (error) => {
        console.error('Error al obtener participantes', error);
      }
    });
  }

// Método para eliminar un participante
deleteParticipante(id: number): void {
  if (confirm('¿Estás seguro de que deseas eliminar este participante?')) {
    this.participantesService.deleteParticipante(id).subscribe({
      next: (response) => {
        console.log(response);  // Verifica la respuesta de la eliminación
        alert('Participante eliminado exitosamente');
        this.getParticipantes();  // Recargar la lista de participantes después de eliminar
      },
    });
  }
}


  // Método para preparar el formulario en modo edición
  editParticipante(participante: any): void {
    this.isEditMode = true;
    this.currentUserId = participante.id;

    // Llenamos el formulario con los datos del participante
    this.participanteForm.setValue({
      usuario: participante.usuario,
      password: participante.password,
      nombre: participante.nombre,
      apellidos: participante.apellidos,
      email: participante.email,
      rol: participante.rol,
      estado: participante.estado
    });
  }

  // Método para cancelar el modo de edición y resetear el formulario
  resetForm(): void {
    this.isEditMode = false;
    this.currentUserId = null;
    this.participanteForm.reset();
  }

  // Método para enviar el formulario (crear o actualizar)
  onSubmit(): void {
    if (this.participanteForm.valid) {
      const participanteData = this.participanteForm.value;
      console.log('ID actual:', this.currentUserId);  // Verifica que el ID no sea null

      if (this.isEditMode && this.currentUserId !== null) {
        // Actualizar participante
        this.participantesService.updateParticipante(this.currentUserId, participanteData).subscribe({
          next: (response) => {
            console.log('Participante actualizado', response);
            this.getParticipantes();  // Recargar la lista de participantes después de actualizar
            this.resetForm();         // Resetear el formulario
          },
          error: (error) => {
            console.error('Error al actualizar el participante', error);
          }
        });
      } else {
        // Crear un nuevo participante
        this.participantesService.createParticipante(participanteData).subscribe({
          next: (response) => {
            console.log('Participante creado', response);
            this.getParticipantes();  // Recargar la lista de participantes después de crear
            this.resetForm();         // Resetear el formulario
          },
          error: (error) => {
            console.error('Error al crear el participante', error);
          }
        });
      }
    }
  }
}
