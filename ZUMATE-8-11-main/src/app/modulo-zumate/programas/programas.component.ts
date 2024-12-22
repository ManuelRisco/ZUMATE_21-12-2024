import { Component } from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.css'
})
export class ProgramasComponent {
  programs = [
    {
      title: 'EDUCACIÓN Y CAPACITACIÓN',
      imageUrl: '/Programa/Educacion.jpg',
      description: 'Programas de refuerzo escolar, talleres de habilidades para la vida, capacitación vocacional y temas emergentes.',
      isFlipped: false
    },
    {
      title: 'SALUD Y NUTRICIÓN',
      imageUrl: '/Programa/Salud y nutricion.png',
      description: 'Iniciativas de salud preventiva y programas de nutrición en escuelas públicas, municipios y comedores populares.',
      isFlipped: false
    },
    {
      title: 'DESARROLLO CULTURAL',
      imageUrl: '/Programa/Desarrollo Cultural.jpg',
      description: 'Actividades culturales, artísticas y recreativas que fomentan el desarrollo integral de niños y adolescentes.',
      isFlipped: false
    },
    {
      title: 'PREVENCIÓN Y SENSIBILIZACIÓN',
      imageUrl: '/Programa/Prevencion.jpg',
      description: 'Campañas de sensibilización sobre los riesgos de pandillaje, drogadicción, embarazo adolescente, deserción escolar y desnutrición.',
      isFlipped: false
    }
  ];

  flipCard(program: { isFlipped: boolean; }) {
    program.isFlipped = !program.isFlipped;
  }
}
