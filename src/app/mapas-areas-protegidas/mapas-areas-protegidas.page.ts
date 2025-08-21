import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mapas-areas-protegidas',
  templateUrl: './mapas-areas-protegidas.page.html',
  styleUrls: ['./mapas-areas-protegidas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class MapasAreasProtegidasPage implements OnInit {
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  constructor() { }

  ngOnInit() {
  }

}
