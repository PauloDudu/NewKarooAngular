import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { Destaque } from 'src/models/models';
import { api } from 'src/services/api';

@Component({
  selector: 'app-destaques-dialog',
  templateUrl: './destaques-dialog.component.html',
  styleUrls: ['./destaques-dialog.component.css']
})

export class DestaquesDialogComponent {

  destaque: Destaque = {
    id: this.data.destaque.id,
    link: this.data.destaque.link,
    descricao: this.data.destaque.descricao
  }

  destaqueInicial: Destaque = {
    id: this.data.destaque.id,
    link: this.data.destaque.link,
    descricao: this.data.destaque.descricao
  }

  constructor(
    public dialogRef: MatDialogRef<DestaquesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      destaque: Destaque
    }, private _toastService: ToastService
  ) { }

  close() {
    this.dialogRef.close();
  }

  async updateDestaque() {

    if (this.destaqueInicial.descricao === this.destaque.descricao && this.destaqueInicial.link === this.destaque.link) {
      this._toastService.warn("Faça alguma alteração!");
      return;
    }

    try {
      await api.put('destaques', this.destaque);
      this._toastService.success("Destaque alterado com sucesso!");
      this.dialogRef.close();
    } catch (error) {
      this._toastService.error("Destaque nao alterado tente novamente!");
    } finally {
      this.dialogRef.close();
    }
  }
}