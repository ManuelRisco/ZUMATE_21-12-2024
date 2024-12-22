import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecoleccionDomicilioService } from './recoleccion-domicilio.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-recoleccion-domicilio',
  templateUrl: './recoleccion-domicilio.component.html',
  styleUrls: ['./recoleccion-domicilio.component.css']
})
export class RecoleccionDomicilioComponent {
  form: FormGroup;
  opciones: string[] = ['Ropa y calzado', 'Materiales deportivos y artísticos', 'Juguetes', 'Útiles escolares', 'Alimentos no perecibles'];
  mensaje: string = ''; // Variable para mostrar el mensaje de éxito o error

  constructor(private fb: FormBuilder, private recoleccionService: RecoleccionDomicilioService) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{1,8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoDonacion: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      // Enviar el formulario con los datos del formulario (no hardcodeados)
      const formData = this.form.value;
      this.recoleccionService.enviarFormulario(formData).pipe(
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
