import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchItem } from '../searchresult';
import { GetItemsService } from '../get-items.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageSelectDialogComponent } from '../image-select-dialog/image-select-dialog.component';
import { delay } from 'q';


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
        console.log("handle image upload "+event.target.files[0]);
        this.searchResultList=undefined;
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.selectedImage = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
        //this.searchResultList=[]
        // for(var i=0;i<8;++i){
        //   console.log("Challa");
        //   if(i%2==0)
        //     this.searchResultList.push({name:"Tread Wire Indicator",status:true,info:"Not present in the given tire image"});
        //   else
        //   this.searchResultList.push({name:"Tread Wire Indicator",status:false,info:"Not present in the given tire image"});
        // }
       this.getSearchResults(event.target.files[0]);

       
    }
}

getSearchResults(img:any){
  
  
  console.log(img);
  var reader = new FileReader();
  reader.readAsDataURL(img);
  console.log("Uploading image and querying the server.....")
  this.getItemService.getItems(img).subscribe(
    res => {
      console.log("The response is : ")
      console.log(res);
      this.searchResultList=[];
      var sum=0;
      var defects=["Liner Air","Bladder Crease","Scorched Rubber Tyre","Crown Deformation","Extruding Stamp Ink"];
      for(var i=0;i<5;++i){
        var s=res['result'][i]==0?false:true;
        if(s==true)
            sum=sum+i+1;
        this.searchResultList.push({"name":defects[i],"status":s,"info":res['info'][i]});
      }
      console.log("The sum is ");
      console.log(sum);
      if(sum!=2)
        {
          this.searchResultList[1].status=false;
        }
      // for(var j in res){
      //   console.log(res[key]);
      //   var result=res[key];
      //   var url=result['href'];
      // }
      // setTimeout(()=>{
      //   this.searchResultList=[];
      //   this.searchResultList.push({name:"Bubble",status:true,info:"Not present in the given tire image"});
      //   this.searchResultList.push({name:"Crease",status:false,info:"Not present in the given tire image"});
      //   this.searchResultList.push({name:"Scorch",status:false,info:"Not present in the given tire image"});
      //   this.searchResultList.push({name:"Crown Deformation",status:true,info:"Not present in the given tire image"});
      //   this.searchResultList.push({name:"Ink Spot",status:true,info:"Not present in the given tire image"});
      //   // for(var i=0;i<4;++i){
      //   //   if(i%2==0)
      //   //     this.searchResultList.push({name:"Tread Wire Indicator",status:true,info:"Not present in the given tire image"});
      //   //   else
      //   //   this.searchResultList.push({name:"Tread Wire Indicator",status:false,info:"Not present in the given tire image"});
      //   // }
      // },4000)
      
      this.fileUploaded.emit(this.searchResultList);
    },
    err => {
      console.log("Error occured");
    }
  );
}


}
