import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonButtons, IonMenuButton]
})
export class SobreNosotrosPage implements OnInit {
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  constructor() { }

  ngOnInit() {
  }

}
