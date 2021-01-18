import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/models/models';
import { ToastService } from 'angular-toastify';
import { api } from 'src/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  funcionario: Funcionario = {
    email: "",
    id: 0,
    nome: "",
    senha: "",

  };

  results: any;

  token: string = "";

  constructor(
    private _toastService: ToastService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  async login() {

    if (!this.funcionario.email || !this.funcionario.senha) {
      this._toastService.warn("Preencha os campos por favor!");
      return;
    }

    console.log("Submit", this.funcionario);

    try {

      let response = await api.post('login', this.funcionario);

      this.results = response.data;


    } catch (error) {
      this._toastService.error("Email ou senha incorretos");
    }

    if (this.results == "") {
      this._toastService.error("Email ou senha incorretos");
      return;
    }

    localStorage.setItem("@KAROO:token", this.results);
    window.location.replace("/atendimento");

  }
}
