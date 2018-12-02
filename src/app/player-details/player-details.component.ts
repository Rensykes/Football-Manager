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
  player={};
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'})
  Url = "https://api.football-data.org/v2/players";
  
  constructor(private srv: FetchdataService,  private route: ActivatedRoute) { }

  getPosts() : void {
    const id = this.route.snapshot.paramMap.get("id");
    const urlReq = `${this.Url}/${id}`;
    this.srv.getData(urlReq)
    
      .subscribe(
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
