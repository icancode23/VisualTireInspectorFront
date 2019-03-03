import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../get-items.service';
import { SearchItem } from '../searchresult';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageSelectDialogComponent } from '../image-select-dialog/image-select-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageChangedEvent: any = '';
  
  constructor(private getItemService:GetItemsService,public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(event_d:any): void {
    const dialogRef = this.dialog.open(ImageSelectDialogComponent, {
      width: '500px',
      data: {imageChangedEvent: event_d}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result.base64);
      var reader = new FileReader();
        reader.onload = (event: any) => {
            this.selectedImage = event.target.result;
            console.log('The cropped image' + event.target.result);
        }
      this.searchResultList=undefined;
      reader.readAsDataURL(result.base64);
      this.getSearchResults(result.base64);

      
    });
  }

  title = 'shopit-app';
  selectedImage:any[];
  searchResultList:SearchItem[];
  imageUploaded:boolean=false;

  onImageUpload(results:SearchItem[]){
    this.searchResultList=results;
    console.log("Results received "+ this.searchResultList.length);
    this.imageUploaded=true;
  }

handleImageUpload(event: any) {
  if (event.target.files && event.target.files[0]) {
      
      this.imageChangedEvent=event;
      console.log("handle image upload "+event);
      // this.openDialog(event);
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.selectedImage = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.getSearchResults(event.target.files[0]);
     
  }
}

getSearchResults(img:any){
this.searchResultList=undefined;

console.log(img);
var reader = new FileReader();
reader.readAsDataURL(img);
console.log("Uploading image and querying the server.....")
this.getItemService.getItems(img).subscribe(
  res => {
    console.log("The response is : ")
    this.searchResultList=[];
    console.log("The response is : ")
    console.log(res);
    this.searchResultList=[];
    var defects=["Liner Air","Bladder Crease","Scorched Rubber Tyre","Crown Deformation","Extruding Stamp Ink"];
    for(var i=0;i<5;++i){
      var s=res['result'][i]==0?false:true;
      this.searchResultList.push({"name":defects[i],"status":s,"info":res['info'][i]});
    }

  },
  err => {
    console.log("Error occured");
  }
);
}


}
