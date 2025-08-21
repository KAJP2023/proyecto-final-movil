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
import { HttpService } from '../http.service';

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
  constructor(private httpService: HttpService) {}
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  noticias = signal<Noticias[]>([]);

  ngOnInit() {
       this.httpService.doGet('/api/noticias').subscribe((res:any) =>{    
      this.noticias.set(res.data);
    });
  }
}
