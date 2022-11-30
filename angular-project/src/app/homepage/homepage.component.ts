import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

import ILogin from '../interfaces/ilogin';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  public dadosLogin: ILogin[];

  private servico: DadosService;

  constructor(dadosService: DadosService) {
    this.servico = dadosService;
    this.dadosLogin = this.servico.buscarDadosDeLogin();
  }

}
