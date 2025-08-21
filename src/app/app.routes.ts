import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./sobre-nosotros/sobre-nosotros.page').then( m => m.SobreNosotrosPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./servicios/servicios.page').then( m => m.ServiciosPage)
  },
  {
    path: 'noticias-ambientales',
    loadComponent: () => import('./noticias-ambientales/noticias-ambientales.page').then( m => m.NoticiasAmbientalesPage)
  },
  {
    path: 'videos-educativos',
    loadComponent: () => import('./videos-educativos/videos-educativos.page').then( m => m.VideosEducativosPage)
  },
  {
    path: 'areas-protegidas',
    loadComponent: () => import('./areas-protegidas/areas-protegidas.page').then( m => m.AreasProtegidasPage)
  },
  {
    path: 'mapas-areas-protegidas',
    loadComponent: () => import('./mapas-areas-protegidas/mapas-areas-protegidas.page').then( m => m.MapasAreasProtegidasPage)
  },
  {
    path: 'medidas-ambientales',
    loadComponent: () => import('./medidas-ambientales/medidas-ambientales.page').then( m => m.MedidasAmbientalesPage)
  },
  {
    path: 'equipo',
    loadComponent: () => import('./equipo/equipo.page').then( m => m.EquipoPage)
  },
  {
    path: 'voluntariado',
    loadComponent: () => import('./voluntariado/voluntariado.page').then( m => m.VoluntariadoPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./Auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'recover',
    loadComponent: () => import('./Auth/recover/recover.page').then( m => m.RecoverPage)
  },
  {
    path: 'normativas',
    loadComponent: () => import('./Auth/normativas/normativas.page').then( m => m.NormativasPage)
  },
];
