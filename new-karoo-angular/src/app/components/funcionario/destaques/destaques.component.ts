import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { Destaque } from 'src/models/models';
import { api } from 'src/services/api';
import { DestaquesDialogComponent } from '../dialogs/destaques-dialog/destaques-dialog.component';
import { logOut } from "../function";

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css', '../funcionario.styles.css']
})
export class DestaquesComponent implements OnInit {

  destaques: Destaque[] = [];
  filter: string = '';
  create: boolean = false;
  destaque: Destaque = {
    descricao: '',
    link: '',
    id: 0
  }

  constructor(public dialog: MatDialog, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.ngGetApi();
  }

  async ngGetApi() {
    try {

      let results = await api.get<Destaque[]>("destaques");
      console.log(results);
      this.destaques = results.data;

    } catch (Exception) {
      console.log(Exception);
    }
  }

  async delete(id: number) {

    try {
      let result = await api.delete(`destaques/${id}`);
      this.ngGetApi();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async createDest() {

    if (!this.destaque.descricao || !this.destaque.link) {
      this._toastService.warn("Preencha todos os campos");
      return;
    }

    try {
      await api.post("destaques", this.destaque);

      this._toastService.success("Destaque criado com sucesso!");
    } catch (error) {
      console.log(error);
      this._toastService.error("Ocorreu algum erro tente novamente!");
    } finally {
      this.ngGetApi();
      this.destaque.descricao = "";
      this.destaque.link = "";
    }
  }

  openDialog(id: number) {

    const dialogRef = this.dialog.open(DestaquesDialogComponent, {
      data: { destaque: this.destaques.find((destaque: Destaque) => id === destaque.id) },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngGetApi();
    });

  }

  logOut() {
    logOut();
  }
}