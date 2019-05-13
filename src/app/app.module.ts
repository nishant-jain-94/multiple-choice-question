import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { McqEditorModule } from '../../projects/mcq-editor/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    McqEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
