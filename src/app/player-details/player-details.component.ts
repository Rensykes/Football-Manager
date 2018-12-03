import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [FetchdataService]
})
export class PlayerDetailsComponent implements OnInit {
  player={}; //object containing informations about the player retrieved from football data
  Url = "https://api.football-data.org/v2/players"; //endpoint to retrieve informations about the player
  
  constructor(private srv: FetchdataService,  private route: ActivatedRoute) { }

  getPosts() : void {
    const id = this.route.snapshot.paramMap.get("id"); //id parameter that defines the player to search
    const urlReq = `${this.Url}/${id}`; //enddpoint correctly builded by concat url/id
    this.srv.getData(urlReq)
      .subscribe( //async request
        data => {
          this.player = data;
          console.log(data);
        },
        error=> console.log(error)
      )
    }
  
  ngOnInit() {
    this.getPosts();
  }

}
