import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultPaneDesktopComponent } from './result-pane-desktop/result-pane-desktop.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';
import { ResultPlaceholderComponent } from './result-placeholder/result-placeholder.component';
import { HorizontalResultPaneComponent } from './horizontal-result-pane/horizontal-result-pane.component';
import { ImagePanelHorizontalResultPaneComponent } from './image-panel-horizontal-result-pane/image-panel-horizontal-result-pane.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CropperModule } from 'ngx-cropper';
import {MatInputModule} from '@angular/material/input';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ImageSelectDialogComponent } from './image-select-dialog/image-select-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultPaneDesktopComponent,
    SearchResultComponent,
    ImagePanelComponent,
    ResultPlaceholderComponent,
    HorizontalResultPaneComponent,
    ImagePanelHorizontalResultPaneComponent,
    TestComponent,
    HomeComponent,
    ImageSelectDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    CropperModule, 
    MatInputModule,
    ImageCropperModule

  ],
  entryComponents: [
    ImageSelectDialogComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
