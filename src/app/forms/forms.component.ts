import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormApiService } from '../service/form-api.service';
import { Forms, Field, PageForms } from '../model/field.model';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { DialogLayoutComponent } from '../dialog-layout/dialog-layout.component';
import { DndDropEvent } from 'ngx-drag-drop';
import { Form } from '@angular/forms';
import { DialogSettingFormComponent } from '../dialog-setting-form/dialog-setting-form.component';
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
        apiInput: 'message',
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
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
        }]
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
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
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
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
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
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
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
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
        }]
      }
    },
    {
      name: 'Card', type: 'card', inputType: 'card', icon: 'crop_portrait', setting: { imgSrc: [{src: ''}] },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
        }]
      }
    },
    {
      name: 'Carousel Card',
      type: 'carousel',
      inputType: 'carousel',
      icon: 'view_carousel',
      setting: {
        imgSrc: [{ src: 'assets/photo1.jpg' }, { src: 'assets/photo2.jpg' }, { src: 'assets/photo3.jpg' }]
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
        }]
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
      },
      config: {
        apiInput: 'message',
        fieldStatus: 'show',
        condition: [{
          label: 'Test',
          value: 'ifelse'
        }]
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
  formsList: Array<Forms> = [
    {
      id: null,
      formName: 'formsName',
      attributes: this.droppedItemsList
    }
  ];
  pageForms: PageForms = {
    id: null,
    name: 'pageName',
    forms: this.formsList
  };

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
  onAddForm(formsList) {
    const form = {
      id: null,
      formName: 'formsName',
      attributes: []
    };
    formsList.push(form);
  }

  // ------- method for drop item from button components and add item in list --------
  onDropItem(event: DndDropEvent, list?: any[]) {
    if (list && event.dropEffect === 'copy') {
      event.data.setting.name = event.data.inputType + '-' + new Date().getTime();
      list.push(event.data);
    }
  }

  // -------- method for detect mouseover event of field for show group button -------------
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
          data.layoutCol = 'oneCol';
      } else if (result === 'twoCol') {
          data.layoutCol = 'twoCol';
          this.droppedItemsList.splice(index + 1, 0, data);
      } else {
        this.droppedItemsList[index].layoutCol = data.layoutCol;
      }
    });
  }

  // ----------- method for open dialog setting form to setting form ----------------
  settingForm(form) {
    const dialogRef = this.dialog.open(DialogSettingFormComponent, {disableClose: true, autoFocus: true, data: form});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //---
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

  // ----------- method for delete Condition of field config ------------------
  deleteCondition(index, conditionList) {
    const dialogRef = this.dialog.open(DialogFormComponent, {disableClose: true, autoFocus: true, data: {inputType : 'condition'}});
    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        conditionList.splice(index, 1);
      }
    });
  }

  // ----------- method for add Condition of field config --------------------
  addCondition(conditionList) {
    const condi = {
      label: '',
      value: ''
    };
    conditionList.push(condi);
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
