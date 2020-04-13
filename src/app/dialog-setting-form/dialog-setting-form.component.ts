import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-setting-form',
  templateUrl: './dialog-setting-form.component.html',
  styleUrls: ['./dialog-setting-form.component.css']
})
export class DialogSettingFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogSettingFormComponent> , @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
