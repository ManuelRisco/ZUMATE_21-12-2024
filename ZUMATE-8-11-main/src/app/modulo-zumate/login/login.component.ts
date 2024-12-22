import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.http.post<any>('http://localhost/ejemplo/login.php', this.loginForm.value).subscribe(
        (response) => {
          if (response.status === 'success') {
            this.router.navigate([response.redirect || '/modulo-admin']);
          } else {
            this.errorMessage = response.message;
          }
        },
        (error) => {
          this.errorMessage = 'Error de conexión. Inténtelo de nuevo más tarde.';
        }
      );
    }
  }
}
