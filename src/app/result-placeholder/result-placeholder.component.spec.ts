import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPlaceholderComponent } from './result-placeholder.component';

describe('ResultPlaceholderComponent', () => {
  let component: ResultPlaceholderComponent;
  let fixture: ComponentFixture<ResultPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
