
import { Component ,OnInit} from '@angular/core';
import { FetchdataService } from './fetchdata.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchdataService]
})
export class AppComponent implements OnInit{
  posts={};
  postJSON:JSON;
  title='Angular HttpClient';
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'})
  Url = "https://api.football-data.org/v2/competitions/SA/matches"
  sfide=[];

  constructor(private srv: FetchdataService) { }
  

 
 getPosts() : void {
  this.srv.getData(this.Url)
    .subscribe(
      data => {
        this.posts['campionato'] = data['competition'];
        this.posts['matches'] = data['matches'];
        for(let match in data['matches']){
          this.sfide.push({id:data['matches'][match].id,homeTeam:data['matches'][match].homeTeam,
          awayTeam:data['matches'][match].awayTeam,utcDate:data['matches'][match].utcDate,
          score:data['matches'][match].score});
        }
        console.log(this.sfide[0].score.fullTime.homeTeam);
        for(let match in this.sfide){
          console.log(match['id']);
        }
      },
      error=> console.log(error)
    )
  }


  ngOnInit(){
    this.getPosts()
  }
}








