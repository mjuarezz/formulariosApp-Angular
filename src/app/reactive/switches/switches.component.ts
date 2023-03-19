import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    condiciones: [false,Validators.requiredTrue],
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder) {
  }

  ngOnInit(): void {
    //this.miFormulario.setValue(this.persona);
    this.miFormulario.reset(
      { ...this.persona,
        condiciones: true
      });

      // ***
      // Cuando se requiere tener estrictamente sincronizado el formulario y el objeto
      // Suscribe a eventos en el formulario que permitiria sincronizar
      // this.miFormulario
      //   .get('condiciones')?.valueChanges
      //   .subscribe(newValue => {
      //     console.log(newValue)
      //   });

      this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
        console.log(this.miFormulario.value);
        //delete form.condiciones;
        this.persona = rest;
      });

  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    console.log(formValue);
    this.persona=formValue;

  }
  
}
