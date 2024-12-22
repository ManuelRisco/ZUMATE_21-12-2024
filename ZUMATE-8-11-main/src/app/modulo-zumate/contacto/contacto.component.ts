import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form: FormGroup;
  mensaje: string = ''; // Variable para mostrar el mensaje de éxito o error

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      mensaje_contacto: ['', Validators.required],
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Enviar el formulario con los datos del formulario (no hardcodeados)
      const formData = this.form.value;
      this.contactoService.enviarFormulario(formData).pipe(
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
