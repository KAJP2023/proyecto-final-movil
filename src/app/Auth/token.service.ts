import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Login } from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
   
  private token = signal<string | undefined>(undefined);
  constructor(private httpClient: HttpClient) { }

  // Nombre: Kevin Alfonso Jiménez Pérez - Matricula: 2023-0920
  loginUser(correo: string, password: string){
       this.httpClient
          .post<Login>('/api/auth/login', {
           "correo": correo,
            "password":password,
          })
          .pipe(
            catchError((error) => {
              console.log(error);
              return throwError('Could not login the user.');
            })
          )
          .subscribe({
            next: (resData) => this.token.set(resData.token),
          });
  }

  returnToken(){
    return this.token.asReadonly();
  }
}
