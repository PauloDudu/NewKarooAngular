import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Funcionario } from 'src/models/models';
import { api } from 'src/services/api';
import { AcessoDialogComponent } from '../dialogs/acesso-dialog/acesso-dialog.component';
import { logOut } from "../function";

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css', '../funcionario.styles.css']
})

export class AcessoComponent implements OnInit {

  funcionario: Funcionario = {
    id: 0,
    email: '',
    nome: '',
    senha: ''
  }

  funcionarios: Funcionario[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFunc();
  }

  async getFunc() {

    try {
      const results = await api.get("funcionarios");
      
      this.funcionarios = results.data;

      console.log(this.funcionarios)
      
    } catch (error) {
      
    }
  }

  async removeFunc(id: number) {
    try {
      let reponse = await api.delete(`funcionarios/${id}`);
      console.log(reponse);
      this.getFunc();
    } catch (error) {
      console.log(error);
    }
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(AcessoDialogComponent, {
      data: { funcionario: this.funcionarios.find((funcionario: Funcionario) => id === funcionario.id)},
      disableClose: true
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.getFunc();
    });
  }
  
  logOut() {
    logOut();
  }
}