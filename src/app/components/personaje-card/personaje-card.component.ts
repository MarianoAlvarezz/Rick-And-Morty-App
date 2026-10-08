import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css'
})
export class PersonajeCardComponent {

  @Input() personaje!: Personaje;
}
