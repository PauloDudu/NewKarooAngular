import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/models/models';
import { ToastService } from 'angular-toastify';
import { api } from 'src/services/api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  funcionario: Funcionario = {
    email: "dudu.dsn.pack",
    id: 0,
    nome: "",
    senha: "123123",
    
  };

  token: string = "";

  constructor (
    private _toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  
  async login() {

    if(!this.funcionario.email || !this.funcionario.senha) {
      this._toastService.warn("Preencha os campos por favor!");
      return;
    }

    console.log("Submit", this.funcionario);

    try {

      let response = await api.post('login', this.funcionario);
      localStorage.setItem("@KAROO:token", response.data);
      window.location.replace("/atendimento");

    } catch (error) {

      this._toastService.error("Email ou senha incoretos");

    }
  }
}
