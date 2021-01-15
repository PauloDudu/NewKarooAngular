import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { Funcionario } from 'src/models/models';
import { api } from 'src/services/api';

@Component({
  selector: 'app-acesso-dialog',
  templateUrl: './acesso-dialog.component.html',
  styleUrls: ['./acesso-dialog.component.css']
})
export class AcessoDialogComponent {

  funcionario: Funcionario = {
    id: this.data.funcionario.id,
    email: this.data.funcionario.email,
    nome: this.data.funcionario.nome,
    senha:this.data.funcionario.senha
  }

  funcionarioInicial: Funcionario = {
    id: this.data.funcionario.id,
    email: this.data.funcionario.email,
    nome: this.data.funcionario.nome,
    senha:this.data.funcionario.senha
  }

  constructor(
    public dialogRef: MatDialogRef<AcessoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      funcionario: Funcionario
     },
     private _toastService: ToastService
  ) { }
  
  async updateFunc() {
    if(this.funcionarioInicial.nome === this.funcionario.nome && this.funcionario.email === this.funcionario.email) {
      this._toastService.warn("Faça alguma alteração!");
      return;
    }

    try {
      await api.put("funcionario",this.funcionario);
      this._toastService.success("Funcionario editado com sucesso!");
      this.dialogRef.close();
    } catch (error) {
      this._toastService.error("Erro ao editar funcionario tente novamente!");
    } finally {
      this.dialogRef.close();
    }
  }
}