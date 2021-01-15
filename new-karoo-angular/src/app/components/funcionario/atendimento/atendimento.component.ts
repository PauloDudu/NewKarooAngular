import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { Assunto } from 'src/models/models';
import { api } from 'src/services/api';
import { AtendimentoDialogComponent } from '../dialogs/atendimento-dialog/atendimento-dialog.component';
import { logOut } from "../function";

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css', '../funcionario.styles.css']
})
export class AtendimentoComponent implements OnInit {

  assuntos: Assunto[] = [];
  atendidos: Assunto[] = [];
  pendentes: Assunto[] = [];

  constructor(public dialog: MatDialog, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.get();
  }

  async get() {
    this.assuntos = [];
    this.atendidos = [];
    this.pendentes = [];
    try {
      let response = await api.get('/assuntos');
      this.assuntos = response.data;
      response.data.filter((assunto: Assunto) => {
        if (assunto.atendido) {
          this.atendidos.push(assunto);
        } else {
          this.pendentes.push(assunto);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  logOut() {
    logOut();
  }

  open(id: string) {

    const dialogRef = this.dialog.open(AtendimentoDialogComponent, {
      data: { assunto: this.assuntos.find((assunto: Assunto) => id === assunto.codigoCliente) },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((results) => {
      this.get();
      if(results === true) {
        this._toastService.success("Atendimendo realizado com sucesso");
      } else if(results === false) {
        this._toastService.warn("Ocorreu algum erro no atendimento");
      } else {
        return;
      }
    });
  }
}