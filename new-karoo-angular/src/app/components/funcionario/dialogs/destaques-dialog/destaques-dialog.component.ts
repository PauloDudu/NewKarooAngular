
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { destaque } from 'src/models/models';
import { api } from 'src/services/api';

@Component({
  selector: 'app-destaques-dialog',
  templateUrl: './destaques-dialog.component.html',
  styleUrls: ['./destaques-dialog.component.css']
})

export class DestaquesDialogComponent {

  destaque: destaque = {
    id: this.data.destaque.id,
    link: this.data.destaque.link,
    descricao: this.data.destaque.descricao
  }

  constructor(
    public dialogRef: MatDialogRef<DestaquesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      destaque: destaque
     }
  ) { }

  close() {
    this.dialogRef.close();
  }

  async updateDestaque() {
    try {
      let results = await api.put('destaques',this.destaque);
      console.log(results.data);
      this.dialogRef.close();
    } catch (error) {
      console.log(error);
    }
  }  
}