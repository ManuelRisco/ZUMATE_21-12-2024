import { Component, OnInit } from '@angular/core';
import { AgregacionLogosService } from './agregacion-logos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregacion-logos',
  templateUrl: './agregacion-logos.component.html',
  styleUrls: ['./agregacion-logos.component.css']
})
export class AgregacionLogosComponent implements OnInit {
  selectedFile: File | null = null;
  imagenes: any[] = []; // Lista para almacenar las imágenes recuperadas
  uploadForm: FormGroup; // Formulario para la URL y archivo

  constructor(
    private logoService: AgregacionLogosService,
    private fb: FormBuilder
  ) {
    // Inicializa el formulario con validaciones
    this.uploadForm = this.fb.group({
      url: ['', [Validators.required]],  // Solo valida que no esté vacío
      imagen: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarImagenes(); // Cargar las imágenes cuando el componente se inicializa
  }

  // Método para manejar la selección de archivos
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Verificar si el archivo seleccionado es una imagen
      if (file.type.startsWith('image/')) {
        this.selectedFile = file;
        this.uploadForm.patchValue({ imagen: file });
      } else {
        alert('Por favor selecciona un archivo de imagen válido.');
      }
    }
  }

  // Método para subir la imagen y URL
  subirImagen(): void {
    console.log('Formulario:', this.uploadForm.value);  // Verifica los valores antes de enviarlos
    if (this.uploadForm.valid) {
      const formData = new FormData();
      formData.append('imagen', this.selectedFile as Blob);  // Asegurarse de que selectedFile no sea nulo
      formData.append('url', this.uploadForm.value.url);     // Obtener la URL desde el formulario

      // Llamar al servicio para subir la imagen y la URL
      this.logoService.subirImagen(formData).subscribe(response => {
        console.log(response);
        if (response.status === 'success') {
          alert('Imagen y URL subidas exitosamente');
          this.cargarImagenes(); // Recargar las imágenes después de subir una nueva
        } else {
          alert('Error al subir la imagen y URL');
        }
      });
    } else {
      alert('Por favor, completa los campos correctamente.');
    }
  }

  // Método para cargar las imágenes existentes
  cargarImagenes(): void {
    this.logoService.getAliados().subscribe(
      (data) => {
        this.imagenes = data;
      },
      (error) => {
        console.error('Error al cargar las imágenes', error);
      }
    );
  }

  eliminarImagen(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta imagen?')) {
      this.logoService.eliminarImagen(id).subscribe(response => {
        if (response.status === 'success') {
          alert('Imagen eliminada exitosamente');
          this.cargarImagenes();
        } else {
          alert('Error al eliminar la imagen');
        }
      });
    }
  }

  // Método para actualizar la tabla
  refreshTable(): void {
    this.cargarImagenes(); // Llamar a getParticipantes para actualizar la lista
  }
}
