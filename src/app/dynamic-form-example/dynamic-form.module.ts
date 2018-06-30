import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
// import { DynamicFormQuestionComponent } from "./dynamic-form-question.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule, ReactiveFormsModule
  ],
    declarations: [
        DynamicFormComponent,
        // DynamicFormQuestionComponent,
    ]
})
export class DynamicFormModule { }
