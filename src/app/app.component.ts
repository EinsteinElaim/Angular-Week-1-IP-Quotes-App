import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quote = 'This is a non existent quote.'


  quotes: string[];

  
  constructor(){
    this.quotes = ['Its fingerlicking good.', 'Eat fresh.', 'It must be the pizza!']
  }

}
