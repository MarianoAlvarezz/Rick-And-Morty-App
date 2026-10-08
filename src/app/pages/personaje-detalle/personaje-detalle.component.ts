import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-personaje-detalle',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './personaje-detalle.component.html',
  styleUrl: './personaje-detalle.component.css'
})
export class PersonajeDetalleComponent implements OnInit {

  personaje: Personaje | null = null;
  cargando: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.personajesService.getPersonaje(id).subscribe({
      next: (data) => {
        this.personaje = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo encontrar el personaje.';
        this.cargando = false;
      }
    });
  }
}
