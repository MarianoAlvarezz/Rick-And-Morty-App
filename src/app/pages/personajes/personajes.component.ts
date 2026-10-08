import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personaje';
import { PersonajeCardComponent } from '../../components/personaje-card/personaje-card.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, PersonajeCardComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  cargando: boolean = false;
  error: string = '';
  busqueda: string = '';
  paginaActual: number = 1;
  totalPaginas: number = 1;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.cargando = true;
    this.error = '';

    this.personajesService.getPersonajes(this.paginaActual, this.busqueda).subscribe({
      next: (respuesta) => {
        this.personajes = respuesta.results;
        this.totalPaginas = respuesta.info.pages;
        this.cargando = false;
      },
      error: () => {
        this.personajes = [];
        this.error = 'No se encontraron personajes.';
        this.cargando = false;
      }
    });
  }

  buscar() {
    this.paginaActual = 1;
    this.cargarPersonajes();
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarPersonajes();
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarPersonajes();
    }
  }
}
