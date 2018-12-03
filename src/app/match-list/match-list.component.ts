import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  providers: [FetchdataService]
})
export class MatchListComponent implements OnInit {

  title='Partite e risultati per oggi';
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'})
  campionati = [{name: 'Serie A', tag: 'SA'}, {name: 'Champions League', tag: 'CL'}, {name: 'Premier League', tag: 'PL'}, {name: 'France League 1', tag: 'FL1'}, {name: 'Bundesliga', tag: 'BL1'}, {name: 'Eredivise', tag: 'DED'}, {name: 'Liga Spagnola', tag: 'PD'}, {name: 'Europa League', tag: 'EC'}, {name: 'Portoguese Primera Division', tag: 'PPL'}];
  selectedChampionsip = "";
  Url: string = "";
  UrlFinished = "";
  UrlToday = "";
  UrlScheduled = "";
  sfide=[];

  constructor(private srv: FetchdataService) { }

  getPosts() : void {
    this.srv.getData(this.UrlToday)
    
      .subscribe(
        data => {
          for(let match in data['matches']){
            this.sfide.push({id:data['matches'][match].id,
                  homeTeam:data['matches'][match].homeTeam,
                  awayTeam:data['matches'][match].awayTeam,
                  utcDate:data['matches'][match].utcDate,
                  score:data['matches'][match].score});
          }
        },
        error=> console.log(error)
      )
      
    }
  
    changeChampionship(campionato): void{
      this.sfide = [];
      this.selectedChampionsip = campionato.tag;
      
      this.Url = "https://api.football-data.org/v2/competitions/" + this.selectedChampionsip + "/matches";
      this.UrlToday = 'https://api.football-data.org/v2/matches'; //Tutte le partite dai oggi di tutti i campionati
      this.UrlScheduled = 'https://api.football-data.org/v2/competitions/' + this.selectedChampionsip + '/matches?status=SCHEDULED'; //Tutte le partite in programma da oggi alla fine del campionato
      this.UrlFinished = 'https://api.football-data.org/v2/competitions/' + this.selectedChampionsip + '/matches?status=FINISHED'; //Tutte le partite passate
      
      this.getPosts();
    }

  ngOnInit() {
  }

}
