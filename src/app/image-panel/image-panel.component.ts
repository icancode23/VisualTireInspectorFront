import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../searchresult';

@Component({
  selector: 'app-image-panel',
  templateUrl: './image-panel.component.html',
  styleUrls: ['./image-panel.component.css']
})
export class ImagePanelComponent implements OnInit {
  @Input()selectedImage:any[];
  @Input()searchResultList:SearchItem[];
  constructor() { }

  ngOnInit() {
  }

}
