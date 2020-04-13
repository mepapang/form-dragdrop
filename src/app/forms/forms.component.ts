import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormApiService } from '../service/form-api.service';
import { Forms, Field } from '../model/field.model';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { DialogLayoutComponent } from '../dialog-layout/dialog-layout.component';
import { DndDropEvent } from 'ngx-drag-drop';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  // @Output() formsValue = new EventEmitter();
  // @Output() indexField = new EventEmitter();

  items: Array<Field> = [
    {
      name: 'Text',
      type: 'input-Text',
      inputType: 'text',
      icon: 'text_format',
      className: 'form-control',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'Text',
        placeholder: 'Enter your text',
        required: false
      },
      config: {
        apiInput: 'test',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
        }]
      }
    },
    {
      name: 'Text Area',
      type: 'input-TextArea',
      inputType: 'textarea',
      icon: 'subject',
      className: 'form-control',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'Text Area',
        placeholder: 'text',
        required: false,
        rows: '3'
      }
    },
    {
      name: 'Checkbox',
      type: 'input-Checkbox',
      inputType: 'checkbox',
      icon: 'check_box',
      className: 'form-check-inline',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'Checkbox',
        required: false,
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
      className: 'form-check-inline',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'Radio Button',
        required: false,
        options: [{
          label: 'option 1',
          value: '1'
        },
      {
        label: 'option 2',
        value: '2'
      }]
      }
    },
    {
      name: 'Dropdown',
      type: 'input-Dropdown',
      inputType: 'select',
      icon: 'list',
      className: 'form-control',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'Dropdown',
        required: false,
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
      className: 'form-control',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'Date',
        required: false,
      }
    },
    {
      name: 'Card', type: 'card', inputType: 'card', icon: 'crop_portrait', setting: { imgSrc: [{src: ''}] }
    },
    {
      name: 'Carousel Card',
      type: 'carousel',
      inputType: 'carousel',
      icon: 'view_carousel',
      setting: {
        imgSrc: [{ src: 'assets/photo1.jpg' }, { src: 'assets/photo2.jpg' }, { src: 'assets/photo3.jpg' }]
      }
    },
    {
      name: 'File input',
      type: 'file',
      inputType: 'file',
      icon: 'folder_open',
      className: ' form-control-file',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: 'File input',
        required: false
      }
    }
  ];

  itemsButton = [
    {
      name: 'Single Button',
      type: 'single-button',
      inputType: 'submit',
      icon: 'crop_5_4',
      className: 'btn btn-primary',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: '',
        label: 'Submit',
        type: 'submit'
      }
    },
    {
      name: 'Double Button',
      type: 'double-button',
      inputType: 'button',
      icon: 'crop_5_4',
      inputColumn: 'col-9',
      labelColumn: 'col-3',
      layoutCol: 'oneCol',
      setting: {
        labelField: '',
        setBtn: [{
          label: 'Submit',
          type: 'submit',
          className: 'btn btn-primary'
        },
      {
          label: 'Cancel',
          type: 'cancel',
          className: 'btn btn-secondary'
        }]
      }
      }
    ];

  droppedItemsList: Array<Field> = [];
  forms: Forms = {
    id: null,
    formName: 'formsName',
    attributes: this.droppedItemsList
  };

  formsValue: any;
  currentDraggedItem: any;
  showButton: number;
  btnAdd: boolean = true;
  showForm: boolean = false;
  button: string;
  
  constructor( private dialog: MatDialog, public formApi: FormApiService) { }

  ngOnInit() { }

  // -------- method for create form in db and form design -------------
  createForm() {
    this.showForm = true;
    this.btnAdd = false;
    // this.formApi.creatForms(this.forms).subscribe(( data => {
    //   if (data) {
    //     this.showForm = true;
    //     this.btnAdd = false;
    //   }
    // }));
  }

  // ------- method for drop item from button components and add item in list --------
  onDropItem(event: DndDropEvent, list?: any[]) {
    if (list && event.dropEffect === 'copy') {
      event.data.setting.name = event.data.inputType + '-' + new Date().getTime();
      list.push(event.data);
    }
    // let index = event.index;
    // list.splice(index, 0, event.data);
    // if ( typeof index === 'undefined') {
    //   index = list.length;
    // }

    // this.currentDraggedItem = event;
    // console.log('this.currentDraggedItem', this.currentDraggedItem);
    // this.currentDraggedItem.dragData.id = event.dragData.inputType + '-' + new Date().getTime();
    // list.push(this.currentDraggedItem.dragData);
    // this.droppedItemsList.push(this.currentDraggedItem.dragData);
  }

  mouseOver(i) {
    this.showButton = i;
  }

  // -------- method for open dialog layout and manage layout -----------------
  onAddLayout(index, data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogLayoutComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'oneCol') {
        this.droppedItemsList[index].layoutCol = 'oneCol';
        this.droppedItemsList[index].setting.placeholder =  'test';
        // this.droppedItemsList[index].layoutRow = 'twoColRow';
        this.droppedItemsList.splice(index + 1, 0, data);
        console.log('this.droppedItemsList',this.droppedItemsList);
        console.log('items',this.items);
      } else if (result === 'twoCol') {
        this.droppedItemsList[index].layoutCol = 'twoCol';
      } else {
        this.droppedItemsList[index].layoutCol = 'col';
      }
    });
  }

  // ------------- delete dropped item from droppedItemList -----------------------
  deleteList(index) {
    const dialogRef = this.dialog.open(DialogFormComponent, {disableClose: true, autoFocus: true, data: {inputType : 'field'}});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.droppedItemsList.splice(index, 1);
      }
    });
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
    this.formsValue = this.forms.attributes;
  }

  // ----- method for delete option of Checkbox and radio ------------------
  deleteOption(index, optionList) {
    const dialogRef = this.dialog.open(DialogFormComponent, {disableClose: true, autoFocus: true, data: {inputType : 'option'}});
    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        optionList.splice(index, 1);
      }
    });
  }

  // ------- method for add option of Checkbox and radio --------------------
  addOption(optionList) {
    const option = {
      label: '',
      value: null
    };
    optionList.push(option);
  }

  // ------- method for Change Button class when select type of Button -------
  onChangeTypeBtn(type, data) {
    if (type === 'cancel') {
      data.className = 'btn btn-secondary';
    } else if (type === 'reset') {
      data.className = 'btn btn-danger';
    } else {
      data.className = 'btn btn-primary';
    }
  }
}
