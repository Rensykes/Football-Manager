

import { Injectable } from '@angular/core';
// import HttpCient
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FetchdataService {

  constructor(private http:HttpClient) { }

  getData(url:string){
    return this.http.get(url, {
      headers: {'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'}
    })    
  }
}



