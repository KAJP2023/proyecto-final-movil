import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token.service';
// import { TokenService } from '../token.service';

export interface Normativas{
  id: string;
  titulo: string;
  tipo: string;
  fecha_publicacion: string;
  descripcion: string;
  url_documento: string;
  fecha_creacion: string;
}

@Component({
  selector: 'app-normativas',
  templateUrl: './normativas.page.html',
  styleUrls: ['./normativas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class NormativasPage implements OnInit {

  private token = signal<string | undefined>('');
  normativas = signal<Normativas[]>([]);
  constructor(private tokenService: TokenService , private httpClient: HttpClient) { }
// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  ngOnInit() {
    
    // const token = this.tokenService.returnToken();
    // if(token) this.getNormativas(token);
  }


  getNormativas(token: string){

  }



}
