import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../searchresult';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input()selectedImage:any[];
  @Input()searchResultList:SearchItem[];
  constructor() { }



  ngOnInit() {
  }

}
