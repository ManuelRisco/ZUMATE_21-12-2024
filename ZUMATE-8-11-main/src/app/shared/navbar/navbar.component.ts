import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  closeMenu() {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      // Cierra el offcanvas utilizando el atributo de data de Bootstrap
      const backdrop = document.querySelector('.offcanvas-backdrop');
      offcanvasElement.classList.remove('show');
      offcanvasElement.setAttribute('aria-hidden', 'true');
      backdrop && backdrop.remove();
    }
  }
}
