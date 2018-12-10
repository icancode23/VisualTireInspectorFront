import { Component, OnInit,Inject} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CropperOption } from 'ngx-cropper';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageSelectDialogComponent } from '../image-select-dialog/image-select-dialog.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  public cropperConfig: CropperOption;

  // constructor() { 
  //   this.cropperConfig = {
  //     url: null, // image server url
  //     maxsize: 512000, // image max size, default 500k = 512000bit
  //     title: 'Apply your image size and position', // edit modal title, this is default
  //     uploadBtnName: 'Upload Image', // default Upload Image
  //     uploadBtnClass: null, // default bootstrap styles, btn btn-primary
  //     cancelBtnName: 'Cancel', // default Cancel
  //     cancelBtnClass: null, // default bootstrap styles, btn btn-default
  //     applyBtnName: 'Apply', // default Apply
  //     applyBtnClass: null, // default bootstrap styles, btn btn-primary
  //     errorMsgs: {  // These error msgs are to be displayed to the user (not the ones sent in returnData)
  //       4000: null, // default `Max size allowed is ${maxsize}kb, current size is ${currentSize}kb`
  //       4001: null  // default 'When sent to the server, something went wrong'
  //     },
  //     fdName: 'file', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
  //     aspectRatio: 1 / 1, // default 1 / 1, for example: 16 / 9, 4 / 3 ...
  //     viewMode: 0 // default 0, value can be 0, 1, 2, 3
  //   };
  // }

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageSelectDialogComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }
  // public onReturnData(data: any) {
  //   console.log("The cropped image received is ");
  //   console.log(JSON.parse(data));
  // }

imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}

}
