import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-result-pane',
  templateUrl: './horizontal-result-pane.component.html',
  styleUrls: ['./horizontal-result-pane.component.css']
})
export class HorizontalResultPaneComponent implements OnInit {
  @Input()selectedImage:any[];
  constructor() { }

  ngOnInit() {
  }

}
