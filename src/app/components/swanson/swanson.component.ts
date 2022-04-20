import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-swanson',
  templateUrl: './swanson.component.html',
  styleUrls: ['./swanson.component.css']
})

export class SwansonComponent {
  index: number = 0;
  joe: string = "";
  quotes: string[] = [];

  constructor(private service: DataService) { }

  public getQuote() {
    this.service.getQuote().subscribe((response: any) => {
      this.quotes = response;
    });
  }
  public getQuotes(count: number) {
    this.service.getQuotes(count).subscribe((response: any) => {
      this.quotes = response;
  });
}
    
  public searchQuotes(term: string) {
    this.service.searchQuote(term).subscribe((response: any) => {
      this.quotes = response;
    });
  }

  public prev(){
    if(this.index == 0)
    console.log("There is no previous entry");
    else
    this.index -= 1;
  }

  public next(){
    if(this.index == this.quotes.length-1)
    console.log("There is no next entry");
    else
    this.index += 1;
  }

  public all(){

  }

}
