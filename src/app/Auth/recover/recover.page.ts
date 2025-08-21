import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLabel, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonLabel, IonButton]
})
export class RecoverPage implements OnInit {
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  correo: string = '';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  recoverUser(){
    
  }

}
