// patrocinar-proyecto.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PatrocinarService } from './patrocinar.service';

@Component({
  selector: 'app-patrocinar-proyecto',
  templateUrl: './patrocinar.component.html',
  styleUrls: ['./patrocinar.component.css']
})
export class PatrocinarComponent {
  form: FormGroup;
  opciones: string[] = ['Proyecto de educación infantil', 'Programa de salud y nutrición', 'Espacios de recreación segura'];
  mensaje: string = ''; // Variable para mostrar el mensaje de éxito o error

  constructor(private fb: FormBuilder, private patrocinarService: PatrocinarService) {
    this.form = this.fb.group({
      nombreEmpresa: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      ruc: ['', [Validators.required, Validators.pattern(/^\d{1,11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      razonSocial: ['', [Validators.required]],
      nombreRep: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellidosRep: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      proyecto: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Enviar el formulario con los datos del formulario (no hardcodeados)
      const formData = this.form.value;
      this.patrocinarService.enviarFormulario(formData).pipe(
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
