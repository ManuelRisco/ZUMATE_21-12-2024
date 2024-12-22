import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ChocolatadaService } from './chocolatada.service';

@Component({
  selector: 'app-chocolatada',
  templateUrl: './chocolatada.component.html',
  styleUrls: ['./chocolatada.component.css']
})
export class ChocolatadaComponent {
  form: FormGroup;
  opciones: string[] = ['Organización del evento', 'Distribución de chocolates', 'Interacción con los niños'];
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private chocolatadaService: ChocolatadaService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      preferencia: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Enviar el formulario con los datos del formulario (no hardcodeados)
      const formData = this.form.value;
      this.chocolatadaService.enviarFormulario(formData).pipe(
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
