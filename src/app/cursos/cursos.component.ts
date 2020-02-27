import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // criando variaveis
  nome: string = 'Mauricio'
  urlImage: string = 'https://vignette.wikia.nocookie.net/enciclopedia-overlord/images/6/60/Albedo_Profile.png/revision/latest?cb=20190406042656&path-prefix=pt-br'
  // criando funções
  getValor() {
    return 25
  }

  constructor() { }

  ngOnInit(): void {

  }

}
