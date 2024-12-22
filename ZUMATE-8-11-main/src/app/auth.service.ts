import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {}

  login(token: string) {
    this.cookieService.set('authToken', token, { path: '/', secure: true, sameSite: 'Lax' });
  }

  logout() {
    this.cookieService.delete('authToken', '/');
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('authToken');
  }
}
