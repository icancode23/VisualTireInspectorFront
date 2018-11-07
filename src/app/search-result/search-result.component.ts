import { Component, OnInit, Input } from '@angular/core';
import {SearchItem} from "../searchresult";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() result:SearchItem;

  constructor() { }

  ngOnInit() {
  }

}
