import { Component, OnInit, Input } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.css']
})
export class SettingFormComponent implements OnInit {

  @Input() formsValue: Form;

  constructor() { }

  ngOnInit() {
  }

  onReset() {
    console.log(this.formsValue);
  }


}
