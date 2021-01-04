import { Component, OnInit } from '@angular/core';
import { Assunto } from "../../../models/models";
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor() { 
  }
  
  assunto: Assunto = {
    codigoCliente: '',
    email: '',
    nomeCliente: '',
    conteudo: ''
  };
  
  ngOnInit(): void {
  }

  setAssunto() {
    if(!this.assunto.codigoCliente || !this.assunto.conteudo || !this.assunto.email || !this.assunto.nomeCliente) {
      alert("Preencha os campos por favor!");
      return;
    }

    if(!localStorage.getItem('@KAROO:assunto')) {
      localStorage.removeItem('@KAROO:assunto')
    }    
    localStorage.setItem('@KAROO:assunto', JSON.stringify(this.assunto));
    window.location.replace("/chat");
  }
}