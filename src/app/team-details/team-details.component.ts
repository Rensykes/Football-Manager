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
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'})
  Url = "https://api.football-data.org/v2/teams";
  team = {};

  constructor(private srv: FetchdataService,  private route: ActivatedRoute) { }

  getPosts() : void {
    const id = this.route.snapshot.paramMap.get("id");
    const urlReq = `${this.Url}/${id}`;
    this.srv.getData(urlReq)
    
      .subscribe(
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
