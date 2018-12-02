
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

 // HttpModule
import {HttpClientModule} from '@angular/common/http';
import {TitleComponent} from './title.component';
import { AppRoutingModule} from 'src/app/app-routing.module';


import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MatchListComponent,
    TeamDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    // HttpModule
    HttpClientModule,
    FormsModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





