import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  title='Quote detail'


  @Input() quote:Quote;


  @Output() isComplete = new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  public numberOfUpVotes: number = 0;
  public numberOfDownVotes: number = 0;

  upVoteButtonClick(){
    this.numberOfUpVotes++;
  }

  downVoteButtonClick(){
    this.numberOfDownVotes++;
  }



  //countup timer
  startTime: Date;
  stopTime: Date;
  active: boolean = false
  get display() { return (this.startTime && this.stopTime) ? +this.stopTime - +this.startTime : 0 }

  timer() {
    if (this.active) {
      this.stopTime = new Date()
      setTimeout(()=>{
        this.timer()
      }, 1000)
    }
  }

  start() {
    this.startTime = new Date()
    this.stopTime = this.stopTime
    this.active = true
    this.timer()
  }

  stop() {
    this.stopTime = new Date()
    this.active = false
  }


  constructor() { }

  ngOnInit() {

  }

}
