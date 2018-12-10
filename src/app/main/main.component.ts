import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchItem } from '../searchresult';
import { GetItemsService } from '../get-items.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageSelectDialogComponent } from '../image-select-dialog/image-select-dialog.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input()selectedImage:any[];
  @Input()searchResultList:SearchItem[];
  @Output()fileUploaded=new EventEmitter<SearchItem[]>();
  imageChangedEvent: any = '';

  constructor(private getItemService:GetItemsService,public dialog: MatDialog) { }


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
      reader.readAsDataURL(result.base64);
      this.getSearchResults(result.base64);

      
    });
  }
  
  ngOnInit() {
  }

  handleImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.imageChangedEvent=event;
        console.log("handle image upload "+event);
        this.openDialog(event);
        // var reader = new FileReader();
        // reader.onload = (event: any) => {
        //     this.selectedImage = event.target.result;
        // }
       
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
      for(var key in res){
        console.log(res[key]);
        var result=res[key];
        this.searchResultList.push({name:result['name'],imgUrl:result['img'],price:result['price'],productUrl:result['href']});
      }
      this.fileUploaded.emit(this.searchResultList);
    },
    err => {
      console.log("Error occured");
    }
  );
}


}
