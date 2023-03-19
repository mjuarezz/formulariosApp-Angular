import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm; 

  /*   
  guardar( miFormulario : NgForm) {
    console.log('submit hecho', miFormulario.value);
  } 
  */

  initForm = {
    producto: 'hola',
    precio: 1,
    existencias: 1
  }

  guardar( ) {
    //console.log(this.miFormulario);
    console.log('Post correcto');
    this.miFormulario.resetForm(
      {
        precio: 0,
        existencias: 0
      }
    );
  }

  validaNombre () : boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto']?.touched;
  }

  validaPrecio () : boolean {
    return this.miFormulario?.controls['precio']?.touched &&
          this.miFormulario?.controls['precio']?.value < 0;
           
  }


}
