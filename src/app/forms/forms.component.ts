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
    { name: 'Text Area', type: 'input-TextArea', inputType: 'textarea', placeholder: '', icon: 'subject'},
    { name: 'Checkbox', type: 'input-Checkbox', inputType: 'checkbox', placeholder: '', icon: 'check_box'},
    { name: 'Radio Button', type: 'input-RadioButton', inputType: 'radio', placeholder: '', icon: 'radio_button_checked'},
    { name: 'Dropdown', type: 'input-Dropdown', inputType: 'select', placeholder: '', icon: 'list'},
    { name: 'Date', type: 'input-Date', inputType: 'date', placeholder: '', icon: 'date_range'},
    { name: 'Card', type: 'card', inputType: 'card', icon: 'crop_portrait'},
    { name: 'Carousel Card', type: 'carousel', inputType: 'carousel', icon: 'view_carousel'},
  ];

  itemsButton = [
    { name: 'Single Button', type: 'single-button', inputType: 'submit', text: 'Submit', icon: 'crop_5_4'},
    { name: 'Double Button', type: 'double-button', inputType: ['submit', 'reset'], text: ['Submit', 'Cancel'], icon: 'crop_5_4'}
  ];

  droppedItemsList = [];
  currentDraggedItem: any;
  showButton: number;

  button: string ;
  constructor() { }

  ngOnInit() {
  }

  onDropItem(e: any) {
    this.currentDraggedItem = e ;
    this.droppedItemsList.push(this.currentDraggedItem.dragData);
  }

  mouseOver(i){
    this.showButton = i;
  }

}
