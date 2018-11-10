import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchItem } from '../searchresult';
import { GetItemsService } from '../get-items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input()selectedImage:any[];
  @Input()searchResultList:SearchItem[];
  @Output()fileUploaded=new EventEmitter<boolean>();
  constructor(private getItemService:GetItemsService) { }



  ngOnInit() {
  }

  handleImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.searchResultList=undefined;
      this.fileUploaded.emit(true);
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.selectedImage = event.target.result;
        }
        console.log(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
        console.log("Uploading image and querying the server.....")
        this.getItemService.getItems(event.target.files[0]).subscribe(
          res => {
            console.log("The response is : ")
            this.searchResultList=[];
            for(var key in res){
              console.log(res[key]);
              var result=res[key];
              this.searchResultList.push({name:result['name'],imgUrl:result['img'],price:result['price'],productUrl:result['href']});

            }
          },
          err => {
            console.log("Error occured");
          }
        );
    }
}



}
