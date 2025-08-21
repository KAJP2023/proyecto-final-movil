import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonButtons, IonMenuButton]
})
export class InicioPage implements OnInit {
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  constructor() { }

  ngOnInit() {
  }

}
