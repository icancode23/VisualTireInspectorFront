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
  constructor(private getItemService:GetItemsService){
//     var i:number;
//     i=0;
//     this.searchResultList=[];
//     for(i=0;i<10;i++){
//       this.searchResultList.push({name:"Dotted Linen Blazer",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/418C-akucDL.jpg",price:"Rs 4500",productUrl:"https://www.amazon.in/SUITLTD-Dotted-Dobby-Bandhgala-Jacket/dp/B07F294Y6V/ref=sr_1_14?ie=UTF8&qid=1541420904&sr=8-14&keywords=dotted+blazer+for+men"});
      
// }
// console.log("Making a sample request.....");
//       this.getItemService.samplePost();
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
