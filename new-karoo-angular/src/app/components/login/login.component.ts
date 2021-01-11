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
    email: "dudu.dsn.pack",
    id: 0,
    nome: "",
    senha: "123123",

  };

  constructor (
    private _toastService: ToastService
  ) { }


  ngOnInit(): void {
    localStorage.clear();
  }
  
  async login() {
    if(!this.funcionario.email || !this.funcionario.senha) {
      this._toastService.warn("Preencha os campos por favor!");
      return;
    }
    
    try {
      let results = await api.get('funcionarios') ;
      console.log(results.data);

      const user = results.data.filter((funcionario : Funcionario) => {
        return funcionario.email === this.funcionario.email && funcionario.senha === this.funcionario.senha;
      });

      if(user.length == 0) {
        this._toastService.error("Login e senha nao informados corretamente!");
        return;
      } else {
        window.location.replace("atendimento")
      }

    } catch (error) {
      console.log(error);
    }
  }
}