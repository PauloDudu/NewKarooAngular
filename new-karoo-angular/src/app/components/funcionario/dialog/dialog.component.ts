import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { destaque } from 'src/models/models';
import { api } from 'src/services/api';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  destaque: destaque = {
    id: 0,
    link: '',
    descricao: ''
  }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      destaque: destaque
     }
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  close(): void {
    this.dialogRef.close();
  }

  async save() {
    try {
      let results = await api.put('destaques',this.destaque);
      console.log(results);
      this.dialogRef.close();
    } catch (error) {
      
    }
  }  
}