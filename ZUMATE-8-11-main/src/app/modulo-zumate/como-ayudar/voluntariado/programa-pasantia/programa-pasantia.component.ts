import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PasantiaService } from './programa-pasantia.service';

@Component({
  selector: 'app-pasantia',
  templateUrl: './programa-pasantia.component.html',
  styleUrls: ['./programa-pasantia.component.css']
})
export class ProgramaPasantiaComponent implements OnInit {
  form: FormGroup;
  semestres: string[] = ['Primer Ciclo', 'Segundo Ciclo', 'Tercer Ciclo', 'Cuarto Ciclo', 'Quinto Ciclo', 'Sexto Ciclo', 'Septimo Ciclo', 'Octavo Ciclo', 'Noveno Ciclo', 'Decimo Ciclo'];
  tiempos: string[] = ['Menos de 5 horas', '5 - 10 horas', '10 - 15 horas', '15 - 20 horas', '20 - 25 horas', 'Más de 25 horas'];
  mensaje: string = '';
  instituciones: any[] = []; // Propiedad para almacenar instituciones
  carreras: any[] = []; // Propiedad para almacenar carreras

  constructor(
    private fb: FormBuilder,
    private pasantiaService: PasantiaService
  ) { 
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(20)]],
      institucion: ['', [Validators.required]], 
      institucionPersonalizada: [''],
      carrera: ['', [Validators.required]], 
      carreraPersonalizada: [''],
      ciclo: ['', [Validators.required]],
      horas: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.obtenerInstituciones(); // Llamada para obtener las instituciones
    this.obtenerCarreras(); // Llamada para obtener las carreras
  }

  obtenerInstituciones(): void {
    this.pasantiaService.obtenerInstituciones().subscribe(
      (data) => {
        this.instituciones = data;
      },
      (error) => {
        console.error('Error al obtener instituciones', error);
      }
    );
  }

  obtenerCarreras(): void {
    this.pasantiaService.obtenerCarreras().subscribe(
      (data) => {
        this.carreras = data;
      },
      (error) => {
        console.error('Error al obtener carreras', error);
      }
    );
  }

  onInstitucionChange() {
    const institucionControl = this.form.get('institucion');
    const institucionPersonalizadaControl = this.form.get('institucionPersonalizada');

    if (institucionControl?.value === 'otro') {
      institucionPersonalizadaControl?.setValidators([Validators.required]);
    } else {
      institucionPersonalizadaControl?.clearValidators();
      institucionPersonalizadaControl?.setValue('');
    }
    institucionPersonalizadaControl?.updateValueAndValidity();
  }

  onCarreraChange() {
    const carreraControl = this.form.get('carrera');
    const carreraPersonalizadaControl = this.form.get('carreraPersonalizada');

    if (carreraControl?.value === 'otro') {
      carreraPersonalizadaControl?.setValidators([Validators.required]);
    } else {
      carreraPersonalizadaControl?.clearValidators();
      carreraPersonalizadaControl?.setValue('');
    }
    carreraPersonalizadaControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      if (formData.institucion === 'otro') {
        formData.institucion = formData.institucionPersonalizada;
      }
      if (formData.carrera === 'otro') {
        formData.carrera = formData.carreraPersonalizada;
      }
      this.pasantiaService.enviarFormulario(formData).pipe(
        catchError(error => {
          console.error('Error al enviar la solicitud:', error);
          this.mensaje = 'Hubo un error al enviar tu solicitud. Por favor, inténtalo nuevamente.';
          return of(null);
        })
      ).subscribe(response => {
        if (response) {
          this.mensaje = '¡Tu solicitud ha sido enviada exitosamente!';
          this.form.reset();
        }
      });
    } else {
      this.mensaje = 'Por favor, completa correctamente todos los campos.';
    }
  }
}
