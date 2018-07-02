import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form-example/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-example/dynamic-form-question/dynamic-form-question.component';
// import { DynamicFormModule } from './dynamic-form-example/dynamic-form.module';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
