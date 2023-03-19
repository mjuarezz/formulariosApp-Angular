import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario : FormGroup = new FormGroup({
  //   nombre: new FormControl('RTx4080ti'),
  //   precio: new FormControl(5),
  //   existencias: new FormControl(2)
  // });
  
  miFormulario: FormGroup = this.fb.group({
    nombre: [,[Validators.required, Validators.minLength(3)]],
    precio: [,[Validators.required,Validators.min(0)]],
    existencias: [,[Validators.required,Validators.min(0)]],
  })

  constructor( private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'Lentes',
      precio: 4,
      existencias: 2
    });
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

}
