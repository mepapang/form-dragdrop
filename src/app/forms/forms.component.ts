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
      icon: 'text_format',
      setting: {
        id: 'text',
        name: 'text',
        labelField: 'Text',
        placeholder: 'Enter your text',
        required: ''
      }
    },
    {
      name: 'Text Area',
      type: 'input-TextArea',
      inputType: 'textarea',
      icon: 'subject',
      setting: {
        id: 'textarea',
        name: 'textarea',
        labelField: 'Text Area',
        placeholder: 'text',
        required: ''
      }
    },
    {
      name: 'Checkbox',
      type: 'input-Checkbox',
      inputType: 'checkbox',
      icon: 'check_box',
      setting: {
        id: 'check',
        name: 'check',
        labelField: 'Checkbox',
        required: '',
        options: [{
          label: 'option 1',
          value: 1
        },
        {
          label: 'option 2',
          value: 2
        }]
      }
    },
    {
      name: 'Radio Button',
      type: 'input-RadioButton',
      inputType: 'radio',
      icon: 'radio_button_checked',
      setting: {
        id: 'radio',
        name: 'radio',
        labelField: 'Radio Button',
        required: '',
        options: [{
          label: 'option 1',
          value: '1'
        }]
      }
    },
    {
      name: 'Dropdown',
      type: 'input-Dropdown',
      inputType: 'select',
      icon: 'list',
      setting: {
        id: 'dropdown',
        name: 'dropdown',
        labelField: 'Dropdown',
        required: '',
        options: [{
          label: 'option 1',
          value: 1
        },
        {
          label: 'option 2',
          value: 2
        },
        {
          label: 'option 3',
          value: 3
        }]
      }
    },
    {
      name: 'Date',
      type: 'input-Date',
      inputType: 'date',
      icon: 'date_range',
      setting: {
        id: 'date',
        name: 'date',
        labelField: 'Date',
        required: '',
      }
    },
    {
      name: 'Card', type: 'card', inputType: 'card', icon: 'crop_portrait', setting: { imgSrc: '' }
    },
    {
      name: 'Carousel Card',
      type: 'carousel',
      inputType: 'carousel',
      icon: 'view_carousel',
      setting: {
        imgSrc: [{ src: 'assets/photo1.jpg' }, { src: 'assets/photo2.jpg' }, { src: 'assets/photo3.jpg' }]
      }
    }
  ];

  itemsButton = [
    {
      name: 'Single Button',
      type: 'single-button',
      inputType: 'submit',
      text: 'Submit',
      icon: 'crop_5_4',
      setting: {
        id: 'button',
        name: 'button',
        labelField: '',
        label: 'Submit',
        typeButton: ['Submit', 'Reset', 'Button']
      }
    },
    {
      name: 'Double Button',
      type: 'double-button',
      inputType: ['submit', 'button'],
      text: ['Submit', 'Cancel'],
      icon: 'crop_5_4',
      setting: {
        id: 'button',
        name: 'button',
        typeButton: ['Submit', 'Reset', 'Button'],
        setting: [{
          label: 'Submit',
          type: 'submit'
        },
        {
          label: 'Cancel',
          type: 'Button'
        }]
      }
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
  settingCard: boolean = false;
  settingCarousel: boolean = false;
  button: string;

  forms: any = {
    name: 'formsName',
    attributes: this.droppedItemsList
  };
  constructor() { }

  ngOnInit() { }

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
        this.settingDate = false;
        this.settingCard = false;
      } else if (items.inputType === 'radio') {
        this.settingRadio = true;
        this.settingCheck = false;
        this.settingSelect = false;
        this.settingButton = false;
        this.settingButtonDouble = false;
        this.settingText = false;
        this.settingDate = false;
        this.settingCard = false;
      } else if (items.inputType === 'select') {
        this.settingSelect = true;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingButton = false;
        this.settingButtonDouble = false;
        this.settingText = false;
        this.settingDate = false;
        this.settingCard = false;
      } else if (items.inputType === 'submit') {
        this.settingButton = true;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingButtonDouble = false;
        this.settingText = false;
        this.settingDate = false;
        this.settingCard = false;
      } else if (items.type === 'double-button') {
        this.settingButtonDouble = true;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingText = false;
        this.settingDate = false;
        this.settingCard = false;
      } else if (items.inputType === 'date') {
        this.settingDate = true;
        this.settingButtonDouble = false;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingText = false;
        this.settingCard = false;
      } else if (items.type === 'card' || items.type === 'carousel') {
        this.settingCard = true;
        this.settingDate = false;
        this.settingButtonDouble = false;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingText = false;
      } else {
        console.log('text');
        this.settingText = true;
        this.settingButtonDouble = false;
        this.settingButton = false;
        this.settingSelect = false;
        this.settingRadio = false;
        this.settingCheck = false;
        this.settingDate = false;
        this.settingCard = false;
      }
    } else {
      this.displaySetting = false;
    }
  }
}
