import { Component, OnInit } from '@angular/core';
import { Assunto } from 'src/models/models';
import { api } from 'src/services/api';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css', '../funcionario.styles.css']
})
export class AtendimentoComponent implements OnInit {

  assuntos: Assunto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.get();
  }

  
  async get() {
    try {
      let response = await api.get('/assuntos');
      this.assuntos = response.data;
    } catch (error) {
      console.log(error);
    }
  }


}
