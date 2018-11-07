import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPaneDesktopComponent } from './result-pane-desktop.component';

describe('ResultPaneDesktopComponent', () => {
  let component: ResultPaneDesktopComponent;
  let fixture: ComponentFixture<ResultPaneDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPaneDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPaneDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
