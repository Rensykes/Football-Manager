import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
  providers: [FetchdataService]

})
export class TeamDetailsComponent implements OnInit {
  title='Partite e risultati per oggi';
  Url = "https://api.football-data.org/v2/teams"; //endpoint to retrieve informations about the team
  team = {}; //object containing informations about the team retrieved from football data

  constructor(private srv: FetchdataService,  private route: ActivatedRoute) { }

  getPosts() : void {
    const id = this.route.snapshot.paramMap.get("id"); //id parameter that defines the team to search
    const urlReq = `${this.Url}/${id}`; //enddpoint correctly builded by concat url/id
    this.srv.getData(urlReq)
      .subscribe( //async request
        data => {
          this.team = data;
          console.log(data);
        },
        error=> console.log(error)
      )
    }
  
  ngOnInit() {
    this.getPosts();
  }

}
