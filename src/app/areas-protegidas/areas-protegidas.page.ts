
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
// import { HttpClient } from '@angular/common/http';
import {Http} from '@capacitor-community/http';
import { map } from 'rxjs';
import { HttpService } from '../http.service';

export interface AreasProtegidas{
id: string;
nombre: string;
tipo: string;
descripcion: string;
ubicacion: string;
superficie: string;
imagen: string;
latitud: string;
longitud: string;
}

@Component({
  selector: 'app-areas-protegidas',
  templateUrl: './areas-protegidas.page.html',
  styleUrls: ['./areas-protegidas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class AreasProtegidasPage implements OnInit {

  /**
   *
   */
  constructor(private httpService: HttpService) {
    
  }
areasProtegidas = signal<AreasProtegidas[]>([]);

// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  ngOnInit() {
    this.httpService.doGet('/api/areas_protegidas').subscribe((res:any) =>{    
      this.areasProtegidas.set(res.data);
    })
  }

}
