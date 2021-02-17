import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';
import {FormsModule} from '@angular/forms';
import { Mod3Module } from './mod3/mod3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mod1Module,
    Mod2Module,
    FormsModule,
    Mod3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
