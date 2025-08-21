import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


export interface Videos{
  id: string;
  titulo: string;
  descripcion: string;
  url: string;
  thumbnail: string;
}

@Component({
  selector: 'app-videos-educativos',
  templateUrl: './videos-educativos.page.html',
  styleUrls: ['./videos-educativos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButtons, IonMenuButton]
})
export class VideosEducativosPage implements OnInit {
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  videos = signal<Videos[]>([]);
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
          .get<Videos[]>('/api/videos')
          .pipe(map((resData) => resData))
          .subscribe({
            next: (data) => {
              if (data) {
                this.videos.set(data);
              }
            },
          });
  }

}
