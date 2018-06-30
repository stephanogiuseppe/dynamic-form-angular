import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form-example/dynamic-form/dynamic-form.component';
// import { DynamicFormModule } from './dynamic-form-example/dynamic-form.module';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent
    ],
    imports: [
        BrowserModule,
        // DynamicFormModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
