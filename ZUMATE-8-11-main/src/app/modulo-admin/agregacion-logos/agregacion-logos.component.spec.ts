import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregacionLogosComponent } from './agregacion-logos.component';
import { AgregacionLogosService } from './agregacion-logos.service';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AgregacionLogosComponent', () => {
  let component: AgregacionLogosComponent;
  let fixture: ComponentFixture<AgregacionLogosComponent>;
  let logoService: jasmine.SpyObj<AgregacionLogosService>;

  beforeEach(async () => {
    const logoServiceSpy = jasmine.createSpyObj('AgregacionLogosService', ['subirImagen', 'getAliados', 'eliminarImagen']);

    await TestBed.configureTestingModule({
      declarations: [AgregacionLogosComponent],
      imports: [HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: AgregacionLogosService, useValue: logoServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregacionLogosComponent);
    component = fixture.componentInstance;
    logoService = TestBed.inject(AgregacionLogosService) as jasmine.SpyObj<AgregacionLogosService>;

    // Configura la respuesta para getAliados
    logoService.getAliados.and.returnValue(of([{ id: 1, nombre: 'Logo 1', url: 'http://example.com', ruta_archivo: 'http://example.com/logo1.png' }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load images on init', () => {
    component.ngOnInit();
    expect(logoService.getAliados).toHaveBeenCalled();
    expect(component.imagenes.length).toBe(1);
    expect(component.imagenes[0].nombre).toBe('Logo 1');
  });

  it('should upload image and URL', () => {
    logoService.subirImagen.and.returnValue(of({ status: 'success' }));

    // Simular archivo y URL
    const file = new File([''], 'image.png', { type: 'image/png' });
    component.selectedFile = file;

    component.subirImagen();

    fixture.detectChanges();  // Asegúrate de que los cambios se reflejen

    expect(logoService.subirImagen).toHaveBeenCalled();
    expect(component.imagenes.length).toBeGreaterThan(0);
    expect(component.imagenes[component.imagenes.length - 1].nombre_archivo).toBe('image.png');
  });

  it('should handle error when uploading image', () => {
    logoService.subirImagen.and.returnValue(of({ status: 'error' }));

    component.selectedFile = new File([''], 'image.png', { type: 'image/png' });
    component.subirImagen();

    fixture.detectChanges();  // Asegúrate de que los cambios se reflejen

    expect(logoService.subirImagen).toHaveBeenCalled();
    // Aquí podrías verificar si un mensaje de error o algún cambio en la UI ocurre
    // Puedes agregar un método de manejo de errores, o revisar la salida en la consola o alertas
  });

  it('should delete image', () => {
    logoService.eliminarImagen.and.returnValue(of({ status: 'success' }));

    component.eliminarImagen(1);

    expect(logoService.eliminarImagen).toHaveBeenCalledWith(1);
  });
});
