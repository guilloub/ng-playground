import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-form-field-demo',
  templateUrl: './form-field-demo.component.html',
  styleUrls: ['./form-field-demo.component.scss'],
})
export class FormFieldDemoComponent {
  hide = true;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `<h1 mat-dialog-title>Favorite Animal</h1>
    <div mat-dialog-content>
      My favorite animal is:
      <ul>
        <li><span *ngIf="data.animal === 'panda'">&#10003;</span> Panda</li>
        <li><span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn</li>
        <li><span *ngIf="data.animal === 'lion'">&#10003;</span> Lion</li>
      </ul>
    </div>`,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
