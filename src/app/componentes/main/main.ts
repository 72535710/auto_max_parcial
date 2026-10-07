import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Solicitud {
  nombre: string;
  correo: string;
  vehiculo: string;
}

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  nombre = '';
  correo = '';
  vehiculo = '';

  solicitudes = signal<Solicitud[]>([]);

  agregarSolicitud() {

    const solicitud: Solicitud = {
      nombre: this.nombre,
      correo: this.correo,
      vehiculo: this.vehiculo
    };

    this.solicitudes.update(lista => [...lista, solicitud]);

    this.nombre = '';
    this.correo = '';
    this.vehiculo = '';
  }
}