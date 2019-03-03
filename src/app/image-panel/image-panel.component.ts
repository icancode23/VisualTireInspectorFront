import { Component, OnInit, Input ,Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import { SearchItem } from '../searchresult';

@Component({
  selector: 'app-image-panel',
  templateUrl: './image-panel.component.html',
  styleUrls: ['./image-panel.component.css']
})
export class ImagePanelComponent implements OnInit,OnChanges {
  @Input()selectedImage:any[];
  @Input()searchResultList:SearchItem[];

  is_running:Boolean=true;
  // @Output()fileUploaded=new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("ngOnChange Invoked");
   if(this.searchResultList!=undefined){
      this.is_running=false;
      console.log("Received Results in image panel");
   }
  }

}
