
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
  //Url = "https://jsonplaceholder.typicode.com/posts"
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'})
  Url = "https://api.football-data.org/v2/competitions/SA/matches"

  // inject FetchdataService service
  constructor(private srv: FetchdataService) { }
  
  /*
  getPosts() : void {
    this.srv.getData(this.Url)
      .subscribe(
        data => this.posts.push(...data),
        error=> console.log(error)
      )
  }
  */
  
 
 getPosts() : void {
  this.srv.getData(this.Url)
    .subscribe(
      data => {
        this.posts['campionato'] = data['competition'];
        this.posts['matches'] = data['matches'];
        for(let match in data['matches']){
          
          console.log(data['matches'][match]['homeTeam'].name + " - " + data['matches'][match]['awayTeam'].name);
          
        }
      },
      error=> console.log(error)
    )
    /*
    var x =JSON.parse(JSON.stringify(this.posts));
    console.log(x.matches);
    Object.keys(this.posts);
    console.log(this.posts);
    */
   //console.log(this.posts.matches);
}


  ngOnInit(){
    this.getPosts()
  }
}








