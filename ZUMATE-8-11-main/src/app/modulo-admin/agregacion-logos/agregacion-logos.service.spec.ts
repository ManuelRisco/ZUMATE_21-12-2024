import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AgregacionLogosService } from './agregacion-logos.service';

describe('AgregacionLogosService', () => {
  let service: AgregacionLogosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AgregacionLogosService]
    });

    service = TestBed.inject(AgregacionLogosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get aliados', () => {
    const dummyAliados = [{ id: 1, nombre: 'Logo 1', url: 'http://example.com' }];

    service.getAliados().subscribe(aliados => {
      expect(aliados).toEqual(dummyAliados);
    });

    const req = httpMock.expectOne('http://localhost/api/aliados/getAliado.php');
    expect(req.request.method).toBe('GET');
    req.flush(dummyAliados);
  });

  it('should upload image', () => {
    const formData = new FormData();
    formData.append('imagen', new File([''], 'image.png'));

    service.subirImagen(formData).subscribe(response => {
      expect(response.status).toBe('success');
    });

    const req = httpMock.expectOne('http://localhost/api/aliados/subirImagen.php');
    expect(req.request.method).toBe('POST');
    req.flush({ status: 'success' });
  });

  it('should delete image', () => {
    const id = 1;

    service.eliminarImagen(id).subscribe(response => {
      expect(response.status).toBe('success');
    });

    const req = httpMock.expectOne(`http://localhost/api/aliados/deleteAliado.php?id=${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ status: 'success' });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
