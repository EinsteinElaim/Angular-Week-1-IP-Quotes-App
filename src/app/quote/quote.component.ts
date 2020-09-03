import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'; //Quote blueprint class

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotess: Quote[] = [
    new Quote(1, 'The gratest glory in living lies not in never falling , but in rising every time we fall.', 'Nelson Mandela', 'Einstein Eliam', '1900-2000', new Date(2020,9,12)),
    new Quote(2, 'The way to get started is to quit talking and begin doing.', 'Walt Disney', 'Albert Alcatraz', '1900-2000', new Date(2021,5,20)),
    new Quote(3, "Your time is limited, so don't waste it living  someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.", 'Steve Jobs', 'Ricardo Givenchy', '1900-2000', new Date(2020,10,1)),
  ];

  


  toggleDetails(index){
    this.quotess[index].showDescription = !this.quotess[index].showDescription
  }


  deleteQuote(isComplete, index){
    
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotess[index].quote} quote by ${this.quotess[index].author}?`)
      
      if(toDelete){
        this.quotess.splice(index, 1)
      }
    }
  }


  addNewQuote(quote){
    let quoteLength = this.quotess.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotess.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
