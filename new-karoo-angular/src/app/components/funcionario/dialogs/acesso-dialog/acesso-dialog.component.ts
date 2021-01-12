import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    public dialogRef: MatDialogRef<AcessoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      funcionario: Funcionario
     }
  ) { }
  
  async updateFunc() {
    try {
      let results = await api.put("funcionarios",this.funcionario);
      console.log(results.data);
      this.dialogRef.close();
    } catch (error) {
      console.log(error);
    }
  }
}