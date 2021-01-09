import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { destaque } from 'src/models/models';
import { api } from 'src/services/api';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css', '../funcionario.styles.css']
})
export class DestaquesComponent implements OnInit {

  destaques: destaque[] = [];
  filter: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ngGetApi();
  }

  async ngGetApi() {
    try {

      let results = await api.get<destaque[]>("destaques");
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

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { destaque: this.destaques.find((destaque: destaque) => id === destaque.id)},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
}