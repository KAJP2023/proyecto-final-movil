import { TokenService } from '../token.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonInput,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonInput,
    IonButton,
  ],
})
export class LoginPage implements OnInit {
  correo: string = '';
  password: string = '';
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  constructor(private tokenService: TokenService) {}

  ngOnInit() {}

  loginUser() {
    const correo: string = this.correo;
    const password: string = this.password;
    
    this.tokenService.loginUser(correo, password);   
 
  }
}
