import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomObservableComponent } from './new-custom-observable.component';

describe('NewCustomObservableComponent', () => {
  let component: NewCustomObservableComponent;
  let fixture: ComponentFixture<NewCustomObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
