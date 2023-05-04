import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit{

forms: FormGroup;

constructor(private fb: FormBuilder){
  
  this.forms = this.fb.group({
    titular:['',Validators.required],
    nroTarjeta:['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    fechaExpiracion:['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    cvv:['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]  ]
  })
}

ngOnInit(): void {
}

crearTarjeta(){
  console.log(this.forms);

  const TARJETA: TarjetaCredito = {
    titular: this.forms.value.titular,
    numeroDeTarjeta: this.forms.value.titular,
    fechaExpiracion: this.forms.value.fechaExpiracion,
    cvv: this.forms.value.cvv,
    fechaActualizacion: new Date(),
    fechaCreacion: new Date
  }

  console.log(TARJETA)
}
}
