// eventos.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventosService } from './eventos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  form: FormGroup;
  opciones: string[] = ['Talleres', 'Campañas de sensibilización', 'Jornadas recreativas'];
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private eventosService: EventosService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(20)]],
      eventos: ['', [Validators.required]]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      // Enviar el formulario con los datos del formulario (no hardcodeados)
      const formData = this.form.value;
      this.eventosService.enviarFormulario(formData).pipe(
        catchError(error => {
          // Si ocurre un error en la solicitud, mostramos un mensaje
          this.mensaje = 'Hubo un error al enviar tu solicitud. Por favor, inténtalo nuevamente.';
          return of(null); // Regresamos un observable vacío para no romper la ejecución
        })
      ).subscribe(response => {
        if (response) {
          // Si la respuesta es exitosa, mostramos el mensaje de éxito
          this.mensaje = '¡Tu solicitud ha sido enviada exitosamente!';
          this.form.reset(); // Limpiar el formulario
        }
      });
    } else {
      this.mensaje = 'Por favor, completa correctamente todos los campos.';
    }
  }
}
