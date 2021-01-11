import { Component, OnInit } from '@angular/core';
import { Assunto } from "../../../models/models";
import { api } from '../../../services/api';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor (
    private _toastService: ToastService
  ) { 
  }
  
  assunto: Assunto = {
    codigoCliente: '',
    email: '',
    nomeCliente: '',
    conteudo: '',
    atendido: false
  };
  
  ngOnInit(): void {
    window.localStorage.clear();
  }

  async setAssunto() {

    if(!this.assunto.codigoCliente || !this.assunto.conteudo || !this.assunto.email || !this.assunto.nomeCliente) {
      this._toastService.warn("Preencha os campos por favor!");
      return;
    }
    
    try {  
      let assunto = await api.post('/assuntos', this.assunto);
      localStorage.setItem('@KAROO:assunto', assunto.config.data);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.replace("/chat");
    }
  }
}