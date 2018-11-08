import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalResultPaneComponent } from './horizontal-result-pane.component';

describe('HorizontalResultPaneComponent', () => {
  let component: HorizontalResultPaneComponent;
  let fixture: ComponentFixture<HorizontalResultPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalResultPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalResultPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
