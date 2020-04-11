import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './table/table.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { FormApiService } from './service/form-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { DndModule } from 'ngx-drag-drop';
import { SettingFormComponent } from './forms/setting-form/setting-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    TableComponent,
    DialogFormComponent,
    DialogLayoutComponent,
    SettingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DndModule
  ],
  providers: [FormApiService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogFormComponent, DialogLayoutComponent]
})
export class AppModule {}
