
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

 // HttpModule
import {HttpClientModule} from '@angular/common/http';
import {TitleComponent} from './title.component';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MatchListComponent
  
  ],
  imports: [
    BrowserModule,
    // HttpModule
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





