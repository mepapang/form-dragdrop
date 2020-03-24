import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  items = [
    { name: 'Text', type: 'input-Text', inputType: 'text', placeholder: '', icon: 'text_format'},
    { name: 'Text Area', type: 'input-TextArea', inputType: 'textArea', placeholder: '', icon: 'subject'},
    { name: 'Checkbox', type: 'input-Checkbox', inputType: 'checkbox', placeholder: '', icon: 'check_box'},
    { name: 'Radio Button', type: 'input-RadioButton', inputType: 'radio', placeholder: '', icon: 'radio_button_checked'},
    { name: 'Dropdown', type: 'input-Dropdown', inputType: 'select', placeholder: '', icon: 'list'},
    { name: 'Date', type: 'input-Date', inputType: 'date', placeholder: '', icon: 'date_range'}
  ];

  itemsButton = [
    { name: 'Single Button', type: 'single-button', inputType: 'submit', text: 'Submit', icon: 'crop_5_4'},
    { name: 'Double Button', type: 'double-button', inputType: 'submit', text: 'Submit', icon: 'crop_5_4'}
  ];

  button: string ;
  constructor() { }

  ngOnInit() {
  }


}