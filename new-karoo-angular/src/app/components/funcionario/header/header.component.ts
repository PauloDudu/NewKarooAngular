import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from 'src/models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() 
  titulo:string = "";
    
  user: Funcionario = {
    email: "",
    id: 0,
    nome: "",
    senha: ""
  };

  constructor() { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    setTimeout(() => {
      this.user = JSON.parse(localStorage.getItem("@KAROO:func") || '{}');
    }, 300); 
  }
}
