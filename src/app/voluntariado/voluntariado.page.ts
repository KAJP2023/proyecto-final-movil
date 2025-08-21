import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLabel, IonButton, IonInput} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-voluntariado',
  templateUrl: './voluntariado.page.html',
  styleUrls: ['./voluntariado.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonButton,
    IonInput
],
})
export class VoluntariadoPage implements OnInit {
  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  password: string = '';
  telefono: string = '';
  constructor(private httpClient: HttpClient) {}

  // Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  ngOnInit() {}

  createSolicitud() {
    const cedula: string = this.cedula;
  const nombre: string = this.nombre;
  const apellido: string = this.apellido;
  const correo: string = this.correo;
  const password: string = this.password;
  const telefono: string = this.telefono;

  
    this.httpClient.post('/api/voluntarios', {cedula, nombre,apellido, correo, password, telefono}).
    pipe(
      catchError((error)=>{        
        console.log(error);
        return throwError('Could not add the volunteer.');
      })
    ).subscribe();
  }

  cleanInputs() {
    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.password = '';
    this.telefono = '';
  }
}
