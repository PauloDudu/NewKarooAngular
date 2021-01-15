import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-remove-func-dialog',
  templateUrl: './remove-func-dialog.component.html',
  styleUrls: ['./remove-func-dialog.component.css']
})
export class RemoveFuncDialogComponent {

  constructor(public dialogRef: MatDialogRef<RemoveFuncDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
    }) { }

  remove: boolean = false;

  removeFunc() {

    this.remove = true;
    this.dialogRef.close(this.remove);
  }

  cancel() {
    this.dialogRef.close(this.remove);
  }

}
