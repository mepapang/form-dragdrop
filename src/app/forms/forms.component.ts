import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  items = [
    {
      name: 'Text',
      type: 'input-Text',
      inputType: 'text',
      placeholder: 'text',
      icon: 'text_format'
    },
    {
      name: 'Text Area',
      type: 'input-TextArea',
      inputType: 'textarea',
      placeholder: 'textarea',
      icon: 'subject'
    },
    {
      name: 'Checkbox',
      type: 'input-Checkbox',
      inputType: 'checkbox',
      icon: 'check_box'
    },
    {
      name: 'Radio Button',
      type: 'input-RadioButton',
      inputType: 'radio',
      icon: 'radio_button_checked'
    },
    {
      name: 'Dropdown',
      type: 'input-Dropdown',
      inputType: 'select',
      icon: 'list'
    },
    {
      name: 'Date',
      type: 'input-Date',
      inputType: 'date',
      icon: 'date_range'
    },
    { name: 'Card', type: 'card', inputType: 'card', icon: 'crop_portrait' , style: [{
      width: '18rem', height: '18rem'
    }]},
    {
      name: 'Carousel Card',
      type: 'carousel',
      inputType: 'carousel',
      icon: 'view_carousel'
    }
  ];

  itemsButton = [
    {
      name: 'Single Button',
      type: 'single-button',
      inputType: 'submit',
      text: 'Submit',
      icon: 'crop_5_4'
    },
    {
      name: 'Double Button',
      type: 'double-button',
      inputType: ['submit', 'reset'],
      text: ['Submit', 'Cancel'],
      icon: 'crop_5_4'
    }
  ];

  droppedItemsList = [];
  currentDraggedItem: any;
  showButton: number;
  displaySetting: boolean = false;
  settingCheck: boolean = false;
  settingRadio: boolean = false;
  settingSelect: boolean = false;
  settingButton: boolean = false;
  settingButtonDouble: boolean = false;
  settingText: boolean = false;
  settingDate: boolean = false;


  button: string;
  constructor() {}

  ngOnInit() {}

  // ------- method for drop item from button components and add item in list --------
  onDropItem(e: any) {
    this.currentDraggedItem = e;
    this.droppedItemsList.push(this.currentDraggedItem.dragData);
  }

  mouseOver(i) {
    this.showButton = i;
  }

  // ------------- delete dropped item from droppedItemList -----------------------
  deleteList(index) {
    this.droppedItemsList.splice(index, 1);
  }
  // ------------- move dropped items in droppedItemsList -----------------------
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.droppedItemsList,
      event.previousIndex,
      event.currentIndex
    );
  }

  // ---- method for open setting tab and setting field -------------------
  settingField(index, items) {
    if (this.displaySetting === false) {
      this.displaySetting = true;
      if (items.inputType === 'checkbox') {
        this.settingCheck = true;
        this.settingRadio = false;
        this.settingSelect = false;
        this.settingButton = false;
        this.settingButtonDouble = false;
        this.settingText = false;
      } else if (items.inputType === 'radio') {
        this.settingRadio = true;
        this.settingCheck = false;
        this.settingSelect = false;
        this.settingButton = false;
        this.settingButtonDouble = false;
        this.settingText = false;
      } else if (items.inputType === 'select') {
        this.settingSelect = true;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingButton = false;
        this.settingButtonDouble = false;
        this.settingText = false;
      } else if (items.inputType === 'submit') {
        this.settingButton = true;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingButtonDouble = false;
        this.settingText = false;
      } else if (items.type === 'double-button') {
        this.settingButtonDouble = true;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingText = false;
      } else if (items.inputType === 'date') {
        this.settingDate = true;
        this.settingButtonDouble = false;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingText = false;
      } else {
        this.settingText = true;
        this.settingButtonDouble = false;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
      }
    } else {
      this.displaySetting = false;
    }
  }
}
