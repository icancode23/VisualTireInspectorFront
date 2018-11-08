import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultPaneDesktopComponent } from './result-pane-desktop/result-pane-desktop.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';
import { ResultPlaceholderComponent } from './result-placeholder/result-placeholder.component';
import { HorizontalResultPaneComponent } from './horizontal-result-pane/horizontal-result-pane.component';
import { ImagePanelHorizontalResultPaneComponent } from './image-panel-horizontal-result-pane/image-panel-horizontal-result-pane.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultPaneDesktopComponent,
    SearchResultComponent,
    ImagePanelComponent,
    ResultPlaceholderComponent,
    HorizontalResultPaneComponent,
    ImagePanelHorizontalResultPaneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
