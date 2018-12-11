import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
export interface DialogData {
  imageChangedEvent: any;
}

@Component({
  selector: 'app-image-select-dialog',
  templateUrl: './image-select-dialog.component.html',
  styleUrls: ['./image-select-dialog.component.css']
})
export class ImageSelectDialogComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  data_d:DialogData;
  constructor(
    public dialogRef: MatDialogRef<ImageSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.imageChangedEvent=data.imageChangedEvent;
      console.log("Image change event received is "+data.imageChangedEvent);
      this.data_d=data;
    }

  onSubmitClick(): void {
    this.dialogRef.close(this.croppedImage);
  }

  ngOnInit() {
    this.fileChangeEvent(this.data_d.imageChangedEvent);
  }



fileChangeEvent(event: any): void {
    console.log(
      "fileChangeEvent Invoked" + event
    );
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
