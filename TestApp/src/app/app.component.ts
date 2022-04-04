import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaAlumnos: any[] = [];
  agregarAlumno: FormGroup;


  constructor(public fb: FormBuilder) {
    this.agregarAlumno = fb.group({
      
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),

    })
  }
  
  guardarAlumno() {
    console.log(this.agregarAlumno);
    let nuevoAlumno = this.agregarAlumno.value;
    this.listaAlumnos.push(nuevoAlumno);

  }
}
