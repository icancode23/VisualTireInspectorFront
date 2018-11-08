import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePanelHorizontalResultPaneComponent } from './image-panel-horizontal-result-pane.component';

describe('ImagePanelHorizontalResultPaneComponent', () => {
  let component: ImagePanelHorizontalResultPaneComponent;
  let fixture: ComponentFixture<ImagePanelHorizontalResultPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePanelHorizontalResultPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePanelHorizontalResultPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
