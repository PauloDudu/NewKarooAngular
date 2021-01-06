import { Component, OnInit } from '@angular/core';
// import { api } from 'src/services/api'
import { Assunto, Chat } from 'src/models/models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  assunto: Assunto = {
    codigoCliente: '',
    email: '',
    nomeCliente: '',
    conteudo: ''
  };

  chat: Chat = {
    id: 'dudu.dsn.pack',
    messages: [{
      user: 'Paulo Eduardo',
      content: 'ola Mundo'
    },{
      user: 'Paulo Eduardo',
      content: 'Segunda mensagem'
    },{
      user: 'Jonas',
      content: 'ola Mundo'
    },{
      user: 'Jonas',
      content: 'ola Mundo'
    },{
      user: 'Jonas',
      content: 'ola Mundo'
    }],
}

  ngOnInit(): void {
    this.get();
  }

  async get() {

    if (!localStorage.getItem('@KAROO:assunto')) {
      window.location.replace('**')
    }
    this.assunto = JSON.parse(localStorage.getItem('@KAROO:assunto') || '{}');

  }
}