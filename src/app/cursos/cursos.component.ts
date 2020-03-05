import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // criando variaveis
  nome = "";
  idade = 0;
  list = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi']
  
  constructor () {}
  
  alteraNome(vl){
    this.nome = vl;
  }

  ngOnInit(): void {

  }

}
