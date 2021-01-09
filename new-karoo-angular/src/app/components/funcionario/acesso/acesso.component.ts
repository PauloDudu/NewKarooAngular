import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/models/models';
import { api } from 'src/services/api';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css', '../funcionario.styles.css']
})
export class AcessoComponent implements OnInit {

  funcionario: Funcionario = {
    id: 0,
    email: '',
    nome: '',
    senha: ''
  }

  funcionarios: Funcionario[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getFunc();
  }

  async getFunc() {
    try {
      const results = await api.get("funcionarios");
      
      this.funcionarios = results.data;
      
    } catch (error) {
      
    }
  }

}
