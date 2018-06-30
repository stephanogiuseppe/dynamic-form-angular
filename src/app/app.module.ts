import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormExampleComponent } from './dynamic-form-example/dynamic-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
