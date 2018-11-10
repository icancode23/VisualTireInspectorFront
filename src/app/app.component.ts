import { Component } from '@angular/core';
import {SearchItem} from "./searchresult"
import { GetItemsService } from './get-items.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopit-app';
  selectedImage:any[];
  searchResultList:SearchItem[];
  imageUploaded:boolean=false;
  constructor(private getItemService:GetItemsService){
  }
  onImageUpload(imageUploaded:boolean){
    this.imageUploaded=imageUploaded;
  }
  handleImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.searchResultList=undefined;
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
