import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.css']
})
export class DialogLayoutComponent implements OnInit {


  value: string;

  constructor(public dialogRef: MatDialogRef<DialogLayoutComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
