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
  destaque: destaque = {
    descricao: '',
    link: ''
  };
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {descricao: this.destaque.descricao, link: this.destaque.link}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.destaque = result;
    });
  }
}
