
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
        this.posts['matches'] = data['matches'];
        console.log(data);
        console.log(this.posts);
      },
      error=> console.log(error)
    )
    console.log(this.posts);
}


  ngOnInit(){
    this.getPosts()
  }
}








