import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  homeSharp,
  informationCircleSharp,
  informationCircleOutline,
  hammerOutline,
  hammerSharp,
  newspaperOutline,
  newspaperSharp,
  videocamOutline,
  videocamSharp,
  personAddOutline,
  personAddSharp,
  locationOutline,
  locationSharp,
  navigateOutline,
  navigateSharp,
  flagOutline,
  flagSharp,
  peopleOutline,
  peopleSharp,
  codeOutline,
  codeSharp,
  lockClosedOutline,
  lockClosedSharp,
} from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
import { TokenService } from './Auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {

  // Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    {
      title: 'Sobre nosotros',
      url: 'sobre-nosotros',
      icon: 'information-circle',
    },
    { title: 'Servicios', url: 'servicios', icon: 'hammer' },
    {
      title: 'Noticias ambientales',
      url: 'noticias-ambientales',
      icon: 'newspaper',
    },
    { title: 'Videos educativos', url: 'videos-educativos', icon: 'videocam' },
    { title: 'Áreas protegidas', url: 'areas-protegidas', icon: 'navigate' },
    {
      title: 'Mapa de áreas protegidas',
      url: 'mapas-areas-protegidas',
      icon: 'location',
    },
    {
      title: 'Medidas ambientales',
      url: 'medidas-ambientales',
      icon: 'flag',
    },
    { title: 'Equipo del ministerio', url: 'equipo', icon: 'people' },
    { title: 'Voluntariado', url: 'voluntariado', icon: 'person-add' },
    { title: 'Acerca de', url: 'acerca-de', icon: 'code' },
  ];
  public login = [
    { title: 'Iniciar sesión', url: 'login', icon: 'lock-closed' },
  ];

  private token: string = '';
  public isLoggedIn = signal<boolean>(this.token? true: false);
  constructor(private tokenService: TokenService) {
    addIcons({
      homeOutline,
      homeSharp,
      informationCircleOutline,
      informationCircleSharp,
      hammerOutline,
      hammerSharp,
      newspaperOutline,
      newspaperSharp,
      videocamOutline,
      videocamSharp,
      navigateOutline,
      navigateSharp,
      locationOutline,
      locationSharp,
      flagOutline,
      flagSharp,
      peopleOutline,
      peopleSharp,
      personAddOutline,
      personAddSharp,
      codeOutline,
      codeSharp,
      lockClosedOutline,
      lockClosedSharp
    });
    register();

    console.log(this.tokenService.returnToken());
  }
}
