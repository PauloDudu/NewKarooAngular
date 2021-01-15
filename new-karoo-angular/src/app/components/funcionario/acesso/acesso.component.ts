import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Funcionario } from 'src/models/models';
import { api } from 'src/services/api';
import { AcessoDialogComponent } from '../dialogs/acesso-dialog/acesso-dialog.component';
import { CreateFuncDialogComponent } from '../dialogs/create-func-dialog/create-func-dialog.component';
import { logOut } from "../function";
import { ToastService } from 'angular-toastify';
import { RemoveFuncDialogComponent } from '../dialogs/remove-func-dialog/remove-func-dialog.component';

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

  constructor(public dialog: MatDialog, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.getFunc();
  }

  async getFunc() {

    try {

      const results = await api.get("funcionarios");
      this.funcionarios = results.data;
      
    } catch (error) {
      this._toastService.warn("Error ao iniciar pagina reinicie por favor!");
    }
  }

  async removeFunc(id: number) {

    const dialogRef = this.dialog.open(RemoveFuncDialogComponent, {
      disableClose: true
    });
    
    dialogRef.afterClosed().subscribe( async (results) => {

      if(results) {
        try {      
          await api.delete(`funcionarios/${id}`);
          this._toastService.success("Funcionario removido com sucesso!")
          this.getFunc();
        } catch (error) {
          this._toastService.error("Funcionario não removido, tente novamente!")
        }
      }
      this.getFunc();
    });

  
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

  openDialogFunc() {
    const dialogRef = this.dialog.open(CreateFuncDialogComponent, {
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