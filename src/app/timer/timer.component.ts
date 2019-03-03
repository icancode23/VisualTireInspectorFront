import { Component, OnInit, Input ,OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit,OnChanges {
  @Input()running:Boolean=true;
  seconds:number=0;
  minutes:number=0;
  hours:number=0;
  t:any;
  current_time:String="00:00:00";

  constructor() { 
    
  }

   add() {
    this.seconds++;
    if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
    }
    
    this.current_time = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
    this.timer();
}
timer() {
  console.log("timer running");
  this.t=setTimeout(this.add.bind(this), 1000);
}
  ngOnInit() {
    this.timer();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(this.running==false){
      console.log("Received Results timer");
        clearTimeout(this.t);
    }
  
  }

}
