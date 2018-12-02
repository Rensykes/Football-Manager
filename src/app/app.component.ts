
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
  title='Partite e risultati per oggi';
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'})
  campionati = [{name: 'Serie A', tag: 'SA'}, {name: 'Champions League', tag: 'CL'}, {name: 'Premier League', tag: 'PL'}, {name: 'France League 1', tag: 'FL1'}, {name: 'Bundesliga', tag: 'BL1'}, {name: 'Eredivise', tag: 'DED'}, {name: 'Liga Spagnola', tag: 'PD'}, {name: 'Europa League', tag: 'EC'}, {name: 'Portoguese Primera Division', tag: 'PPL'}];
  selectedChampionsip = {};
  //Url = "https://api.football-data.org/v2/competitions/SA/matches" //Tutti i match dall'inizio alla fine della serie A
  //UrlToday = 'https://api.football-data.org/v2/matches'; //Tutte le partite dai oggi di tutti i campionati
  //UrlScheduled = 'https://api.football-data.org/v2/competitions/SA/matches?status=SCHEDULED'; //Tutte le partite in programma da oggi alla fine del campionato
  //UrlFinished = 'https://api.football-data.org/v2/competitions/SA/matches?status=FINISHED'; //Tutte le partite passate
  Url: string = "";
  UrlFinished = "";
  UrlToday = "";
  UrlScheduled = "";
  sfide=[];

  constructor(private srv: FetchdataService) { }
  

 
 getPosts() : void {
  this.srv.getData(this.Url)
    .subscribe(
      data => {
        for(let match in data['matches']){
          this.sfide.push({id:data['matches'][match].id,
                homeTeam:data['matches'][match].homeTeam,
                awayTeam:data['matches'][match].awayTeam,
                utcDate:data['matches'][match].utcDate,
                score:data['matches'][match].score});
        }
        //console.log(this.sfide[0].score.fullTime.homeTeam);
        /*
        for(let match in this.sfide){
          console.log(match['id']);
        }
        */
       //console.log(this.sfide);
      },
      error=> console.log(error)
    )
  }

  changeChampionship(campionato): void{
    this.sfide = [];
    this.selectedChampionsip = campionato;
    this.Url = "https://api.football-data.org/v2/competitions/" + this.selectedChampionsip.tag + "/matches";
    this.UrlToday = 'https://api.football-data.org/v2/matches'; //Tutte le partite dai oggi di tutti i campionati
    this.UrlScheduled = 'https://api.football-data.org/v2/competitions/' + this.selectedChampionsip.tag + '/matches?status=SCHEDULED'; //Tutte le partite in programma da oggi alla fine del campionato
    this.UrlFinished = 'https://api.football-data.org/v2/competitions/' + this.selectedChampionsip.tag + '/matches?status=FINISHED'; //Tutte le partite passate
    this.getPosts();
  }


  ngOnInit(){
    //this.getPosts()
  }
}








