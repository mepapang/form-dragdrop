import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogFormComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
