import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import ILogin from '../interfaces/ilogin';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  private login: ILogin[] =[];

  private servico: DadosService;

  constructor(dadosService: DadosService) {
    this.servico = dadosService;
  }

  cadastrar() {

    let inputUsuario = document.getElementById('usuario') as HTMLInputElement;
    let valueUsuario = inputUsuario?.value;

    let inputSenha = document.getElementById('senha') as HTMLInputElement;
    let valueSenha = inputSenha?.value;

    const login = {
      usuario: valueUsuario,
      senha: valueSenha
    }
    

    this.servico.cadastrarLogin(login);
  }
}
