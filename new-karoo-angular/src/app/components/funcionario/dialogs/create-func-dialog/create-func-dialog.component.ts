import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { Destaque, Funcionario } from 'src/models/models';
import { api } from 'src/services/api';
import { DestaquesDialogComponent } from '../destaques-dialog/destaques-dialog.component';

@Component({
  selector: 'app-create-func-dialog',
  templateUrl: './create-func-dialog.component.html',
  styleUrls: ['./create-func-dialog.component.css']
})
export class CreateFuncDialogComponent implements OnInit {

  funcionario: Funcionario = {
    id: 0,
    nome: '',
    email: '',
    senha: ''
  }

  constructor(
    public dialogRef: MatDialogRef<DestaquesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      destaque: Destaque
     },
     private _toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  async createFunc() {

    if(!this.funcionario.nome || !this.funcionario.email || !this.funcionario.senha) {
      this._toastService.warn("Preencha os campos por favor!");
      return;
    }
    
    try {
      await api.post("funcionarios", this.funcionario);
      this._toastService.success("Funcionario criado com sucesso!");
      
    } catch (error) {
      this._toastService.error("Erro ao criar funcionario, tente novamente");
      console.log(error);
    } finally {
      this.dialogRef.close();
    }    
  }
}
