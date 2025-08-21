import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { HttpService } from '../http.service';

export interface Servicios{
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle]
})
export class ServiciosPage implements OnInit {
  
  constructor(private httpService: HttpService ) { }
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  servicios = signal<Servicios[]>([]); 
  

  ngOnInit() {
    this.httpService.doGet('/api/servicios').subscribe((res:any) =>{    
      this.servicios.set(res.data);
    });
  }

}
