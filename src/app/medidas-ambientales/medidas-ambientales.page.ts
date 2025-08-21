import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { HttpService } from '../http.service';

export interface Medidas {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-medidas-ambientales',
  templateUrl: './medidas-ambientales.page.html',
  styleUrls: ['./medidas-ambientales.page.scss'],
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
],
})
export class MedidasAmbientalesPage implements OnInit {

  medidas = signal<Medidas[]>([]);

  constructor(private httpService: HttpService) {}
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  ngOnInit() {
    this.httpService.doGet('/api/medidas').subscribe((res:any) =>{    
      this.medidas.set(res.data);
    });
  }
}
