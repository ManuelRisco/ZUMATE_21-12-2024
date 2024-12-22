import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PasantiaService } from './programa-pasantia.service';

describe('PasantiaService', () => {
  let service: PasantiaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PasantiaService]
    });
    service = TestBed.inject(PasantiaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send form data to the API', () => {
    const formData = { /* tus datos de formulario aquí */ };

    service.enviarFormulario(formData).subscribe(response => {
      expect(response).toBeTruthy(); // Asegúrate de que la respuesta sea válida
    });

    const req = httpMock.expectOne('http://localhost/ejemplo/insertar_pasantia.php');
    expect(req.request.method).toBe('POST');
  });

  it('should get instituciones from the API', () => {
    service.obtenerInstituciones().subscribe(instituciones => {
      expect(instituciones).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost/api/instituciones/obtener_instituciones.php');
    expect(req.request.method).toBe('GET');
  });

  it('should get carreras from the API', () => {
    service.obtenerCarreras().subscribe(carreras => {
      expect(carreras).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost/api/carreras/obtener_carreras.php');
    expect(req.request.method).toBe('GET');
  });

  it('should handle errors', () => {
    const errorMessage = 'Error de red';

    service.obtenerInstituciones().subscribe(
      () => fail('expected an error, not instituciones'),
      error => {
        expect(error).toContain('Error de red');
      }
    );

    const req = httpMock.expectOne('http://localhost/ejemplo/obtener_instituciones.php');
    req.error(new ErrorEvent('Network error', { message: errorMessage }));
  });
});
