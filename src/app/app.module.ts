import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { MaterialModule } from './material/material.module';
import { NgDragDropModule } from 'ng-drag-drop';
import { TableComponent } from './table/table.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { FormApiService } from './service/form-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    TableComponent,
    DialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [FormApiService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogFormComponent]
})
export class AppModule {}
