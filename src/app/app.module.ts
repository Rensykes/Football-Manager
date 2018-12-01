
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 // HttpModule
import {HttpClientModule} from '@angular/common/http';
import {TitleComponent} from './title.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent
  
  ],
  imports: [
    BrowserModule,
    // HttpModule
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





