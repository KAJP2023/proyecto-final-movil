import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { map } from 'rxjs';

export interface Noticias {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen: string;
}

@Component({
  selector: 'app-noticias-ambientales',
  templateUrl: './noticias-ambientales.page.html',
  styleUrls: ['./noticias-ambientales.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonButtons,
    IonMenuButton,
  ],
})
export class NoticiasAmbientalesPage implements OnInit {
  constructor(private httpClient: HttpClient) {}
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  noticias = signal<Noticias[]>([]);

  ngOnInit() {
    this.httpClient
      .get<Noticias[]>('/api/noticias')
      .pipe(map((resData) => resData))
      .subscribe({
        next: (data) => {
          if (data) {
            this.noticias.set(data);
          }
        },
      });
  }
}
