import { Component, OnInit, Input,Output,EventEmitter,OnChanges, SimpleChange } from '@angular/core';
import { SearchItem } from '../searchresult';
import { range } from 'rxjs';

@Component({
  selector: 'app-result-pane-desktop',
  templateUrl: './result-pane-desktop.component.html',
  styleUrls: ['./result-pane-desktop.component.css']
})
export class ResultPaneDesktopComponent implements OnInit,OnChanges {
  @Input()selectedImage:any[];
  @Input()searchResultList:SearchItem[];
  flag:Boolean=false;
  
  
  //search_item:SearchItem={name:"Dotted Linen Blazer",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/418C-akucDL.jpg",price:"Rs 4500",productUrl:"https://www.amazon.in/SUITLTD-Dotted-Dobby-Bandhgala-Jacket/dp/B07F294Y6V/ref=sr_1_14?ie=UTF8&qid=1541420904&sr=8-14&keywords=dotted+blazer+for+men"};
  constructor() {
    
   }

  

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(this.searchResultList!=undefined && this.searchResultList.length!=0){
      for(var defect in this.searchResultList){
        console.log(defect);
        if(this.searchResultList[defect].status==true)
          this.flag=true;
      }
    }
  
  }

}
