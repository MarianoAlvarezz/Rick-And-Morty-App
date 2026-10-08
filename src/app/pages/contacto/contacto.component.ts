import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  enviar() {

    this.enviado = true;
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
