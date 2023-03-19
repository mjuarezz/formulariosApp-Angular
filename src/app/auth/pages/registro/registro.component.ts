import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
//import { emailPattern, nombreApellidoPattern, noPuedeSernobody } from 'src/app/shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit{




  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern( this.valService.nombreApellidoPattern ) ]],
    email: ['',[Validators.required, Validators.pattern( this.valService.emailPattern ) ], [ this.emailValidator ] ],
    username: ['',[Validators.required, this.valService.noPuedeSernobody ]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required ]]
  },{
    validators: [ this.valService.camposIguales( 'password', 'password2' ) ]
  });

  constructor(  private fb: FormBuilder,
                private valService: ValidatorService,
                private emailValidator: EmailValidatorService) {

  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Juan Perez',
      email: 'nobody@email.com',
      username: 'tianiti',
      password: '123456',
      password2: '123456'
    })
  }

  get emailErrorMsg (): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio';
    }
    else if(errors?.['pattern']) {
      return 'Formato incorrecto de un mail';
    }
    else if(errors?.['emailEnUso']) {
      return 'Este email ya ha sido usado';
    }
    return '';
  }

  esValidoCampo(campo : string) {
    //return this.miFormulario.controls[campo].errors &&
    //       this.miFormulario.controls[campo].touched
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched;
  }

  crear() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
     console.log(this.miFormulario.value);
     this.miFormulario.reset();
  }

}
