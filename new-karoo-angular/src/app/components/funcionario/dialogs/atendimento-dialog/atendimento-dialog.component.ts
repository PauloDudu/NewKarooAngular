import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assunto } from 'src/models/models';
import { api } from 'src/services/api';


@Component({
  selector: 'app-atendimento-dialog',
  templateUrl: './atendimento-dialog.component.html',
  styleUrls: ['./atendimento-dialog.component.css']
})
export class AtendimentoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AtendimentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      assunto: Assunto
     }
  ) { }

  ngOnInit(): void {
  }

  async close() {
    this.dialogRef.close();
  }
  
  async updateAtendimento() {
    
    try {
     console.log(await api.put(`assunto`, {...this.data.assunto, atendido: true}));
     this.dialogRef.close(true);

    } catch (error) {
      console.log(error);
      this.dialogRef.close(false);
    } 
  }
}