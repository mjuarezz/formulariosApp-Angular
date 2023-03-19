import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Gato Pelota',Validators.required],
      ['Encantados',Validators.required]
    ], Validators.required )
  })

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  get getFavoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) {

  }

  esValidoCampoNombre(campo : string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
     console.log(this.miFormulario.value);
     this.miFormulario.reset();
  }


  agregarFavoritoNuevo() {
    if(!this.nuevoFavorito.valid) {
      return;
    }
    this.getFavoritosArr
      .push(
        //** Usando FormControl
        //new FormControl(this.nuevoFavorito.value, Validators.required)

        //** Usando FormBuilder
        this.fb.control( this.nuevoFavorito.value, Validators.required )
      );
    this.nuevoFavorito.reset();
  }

  borrarFavorito(i: number) {
    this.getFavoritosArr.removeAt(i);
  }

}
