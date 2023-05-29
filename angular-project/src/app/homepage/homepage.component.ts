import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import { DatabaseService } from '../database.service';

import ILogin from '../interfaces/ilogin';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  public dadosLogin: ILogin[];

  private servico: DadosService;
  private database: DatabaseService;

  constructor(dadosService: DadosService, database: DatabaseService) {
    this.database = database;
    this.servico = dadosService;
    this.dadosLogin = this.servico.buscarDadosDeLogin();
    console.log(this.dadosLogin);
  }

  ngOnInit(): void {
    const data = this.database.get();

    this.dadosLogin = data;
    console.log(this.dadosLogin);
  }
}
