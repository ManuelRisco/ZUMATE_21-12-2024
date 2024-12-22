import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LibroReclamacionesService } from './libro-reclamaciones.service';

@Component({
  selector: 'app-libro-reclamaciones',
  templateUrl: './libro-reclamaciones.component.html',
  styleUrls: ['./libro-reclamaciones.component.css']
})
export class LibroReclamacionesComponent {
  form: FormGroup;
  documentos: string[] = ['Seleccione','DNI','C.E'];
  tipos: string[] = ['Seleccione','Reclamo','Queja'];
  motivos: string[] = ['Seleccione','Servicio','Atención','Otra...'];
  subtipos: string[] = ['Seleccione','Demora','Mal servicio','Falta de información','Otra...'];
  mensaje: string = '';

  constructor(private fb: FormBuilder, private libroreclamacionesService: LibroReclamacionesService) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern('^\\d{1,8}$')]],
      nombres: ['', [Validators.required, Validators.pattern('^[A-Za-z\s]+$')]],
      apellidoPaterno: ['', [Validators.required, Validators.pattern('^[A-Za-z\s]+$')]],
      apellidoMaterno: ['', [Validators.required, Validators.pattern('^[A-Za-z\s]+$')]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      tipo: ['', Validators.required],
      subtipo: ['', Validators.required],
      motivo: ['', Validators.required],
      descripcion: [''],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Enviar el formulario con los datos del formulario (no hardcodeados)
      const formData = this.form.value;
      this.libroreclamacionesService.enviarFormulario(formData).pipe(
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
