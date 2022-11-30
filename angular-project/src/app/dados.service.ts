import { Injectable } from '@angular/core';

import ILogin from './interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public login: ILogin[] = []

  constructor() { }

  buscarDadosDeLogin(): ILogin[] {
    return this.login;
  }

  cadastrarLogin(login: ILogin): {
    
    this.login.push
  }
}
