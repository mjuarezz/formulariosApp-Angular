import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona : Persona = {
    nombre: 'Juan',
    favoritos: [
      {id: 1, nombre: 'GatoPelota'},
      {id: 2, nombre: 'Escondidas'}
    ]
  }

  nuevoJuego: string = '';

  @ViewChild('miFormulario') miFormulario!: NgForm; 

  guardar() {
    console.log('formulario posteado');
  }

  eliminar(index : number) {
    console.log('eliminar',index)
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id:this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos
      .push({ ...nuevoFavorito })
    this.nuevoJuego = '';
  }

}
