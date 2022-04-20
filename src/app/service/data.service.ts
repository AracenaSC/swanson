import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public getQuote(){
    return this.http.get(`${apiUrl}`);
  }
  public getQuotes(count: number){
    return this.http.get(`${apiUrl}/${count}`)
  }
  public searchQuote(term:string){
    return this.http.get(`${apiUrl}/search/${term}`);
  }
}
