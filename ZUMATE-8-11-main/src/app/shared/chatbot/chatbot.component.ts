import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  isChatOpen = false;  // Controla si el chatbot está abierto o cerrado
  currentStep = 'main'; // Paso actual (comienza en la pantalla principal)
  responseText = '';    // El texto de la respuesta dinámica que se va a mostrar
  currentOptions: any[] = []; // Opciones que se mostrarán dependiendo del paso

  // Opciones de la pantalla principal
  mainOptions = [
    { label: 'Quiero donar', value: 'donar' },
    { label: 'Necesito ayuda', value: 'necesito-ayuda' },
    { label: 'Soy donante', value: 'soy-donante' },
    { label: 'Quiero una alianza corporativa', value: 'alianza' },
    { label: 'Quiero ser voluntario', value: 'voluntario' }
  ];

  // Opciones de donación
  donationOptions = [
    { label: 'Donar por Plin o Yape', value: 'plin-yape' },
    { label: 'Donar por transferencia', value: 'transferencia' }
  ];

  // Opciones de ayuda
  helpOptions = [
    { label: 'Asistencia para niños', value: 'asistencia-ninos' },
    { label: 'Apoyo educativo', value: 'apoyo-educativo' },
    { label: 'Asistencia legal', value: 'asistencia-legal' },
    { label: 'Otras ayudas', value: 'otras-ayudas' }
  ];

  // Método para abrir el chatbot
  openChatbot(): void {
    this.isChatOpen = true;
    this.currentStep = 'main'; // Al abrir, comienza en la pantalla principal
    this.currentOptions = this.mainOptions; // Opciones iniciales
    this.responseText = '¡Hola! ¿Cómo podemos ayudarte?'; // Mensaje de bienvenida
  }

  // Método para cerrar el chatbot
  closeChatbot(): void {
    this.isChatOpen = false;
    this.responseText = ''; // Limpiar texto
    this.currentStep = 'main'; // Volver al paso inicial
    this.currentOptions = [];
  }

  // Cambia al paso de la opción seleccionada
  showInfo(option: string): void {
    this.currentStep = option;
    this.updateResponseText(option);
  }

  // Función para actualizar la respuesta según la opción seleccionada
  updateResponseText(option: string): void {
    switch (option) {
      case 'donar':
        this.responseText = `
          <p>¡Gracias por querer apoyar a nuestros niños y niñas! A continuación te dejamos las opciones para realizar tu donación:</p>
        `;
        this.currentOptions = this.donationOptions; // Muestra opciones de donación
        break;
      case 'necesito-ayuda':
        this.responseText = `
          <p>¿En qué podemos ayudarte? Por favor, elige una de las siguientes opciones:</p>
        `;
        this.currentOptions = this.helpOptions; // Muestra opciones de ayuda
        break;
      case 'soy-donante':
        this.responseText = `
          <p>¡Muchas gracias por tu generoso apoyo! Tu donación hace una gran diferencia en la vida de nuestros niños y niñas.</p>
          <p>Si deseas saber cómo ha ayudado tu contribución, puedes enviar un mensaje a este número:</p>
          <p><strong>Número de contacto:</strong>+51 917 365 659</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'alianza':
        this.responseText = `
          <p>¡Gracias por tu interés en colaborar con nosotros! Para establecer una alianza corporativa.</p>
          <p><strong>Ingrese a la pestaña ¿Cómo ayudar? y luego a Patrocinar proyecto</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'voluntario':
        this.responseText = `
          <p>¡Nos alegra mucho que quieras ser parte de nuestro equipo de voluntarios! Para inscribirte y obtener más información.</p>
          <p><strong>Ingrese a la pestaña ¿Cómo ayudar? y luego a Voluntariado</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'plin-yape':
        this.responseText = `
          <p>Puedes realizar tu donación mediante Plin o Yape al siguiente número:</p>
          <p><strong>Número:</strong>+51 917 365 659</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'transferencia':
        this.responseText = `
          <p>Realiza tu donación a nuestra cuenta bancaria:</p>
          <p><strong>Número de cuenta:</strong> 123-456-789</p>
          <p><strong>Código interbancario:</strong> 002-123-456-789</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'asistencia-ninos':
        this.responseText = `
          <p>Ofrecemos ayuda en educación, alimentación y refugio para niños vulnerables. Si necesitas apoyo para un niño, contáctanos a este número:</p>
          <p><strong>Número de contacto:</strong>+51 917 365 659</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'apoyo-educativo':
        this.responseText = `
          <p>Si necesitas asistencia con programas educativos o tutoría, contáctanos para obtener más información.</p>
          <p><strong>Número de contacto:</strong>+51 917 365 659</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'asistencia-legal':
        this.responseText = `
          <p>Brindamos orientación legal para familias en situaciones vulnerables. Si requieres apoyo, contáctanos a este número:</p>
          <p><strong>Número de contacto:</strong>+51 917 365 659</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
      case 'otras-ayudas':
        this.responseText = `
          <p>Si necesitas otro tipo de asistencia, nuestro equipo está disponible para ayudarte. Llámanos al siguiente número:</p>
          <p><strong>Número de contacto:</strong>+51 917 365 659</p>
        `;
        this.currentOptions = []; // No muestra más opciones
        break;
    }
  }

  // Restablece el chat
  resetChat(): void {
    this.currentStep = 'main';
    this.responseText = '¡Hola! ¿Cómo podemos ayudarte?'; // Mensaje inicial
    this.currentOptions = this.mainOptions; // Opciones iniciales
  }
}

