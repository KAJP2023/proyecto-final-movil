import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import {
  provideHttpClient,
} from '@angular/common/http';

// Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920

// export class Interceptor {
//   constructor(private tokenService: TokenService){}
//   // tokenService = inject(TokenService);
//   public authenticatingInterceptor(
//     request: HttpRequest<unknown>,
//     next: HttpHandlerFn
//   ) {
//     const auth_token = this.tokenService.returnToken();
//     const headers = new HttpHeaders({
//       'Content-type': 'application/json',
//       Authorization: `Bearer ${auth_token}`,
//     });

//     const req = request.clone({
//       headers: headers,
//     });
//     return next(request);
//   }
// }



// const tokenService = inject(TokenService);
// function authenticatingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
//   const auth_token = tokenService.returnToken();
//   const headers = new HttpHeaders({
//     'Content-type': 'application/json',
//     Authorization: `Bearer ${auth_token}`,
//   });

//   const req = request.clone({
//     headers: headers,
//   });
//   return next(request);
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
