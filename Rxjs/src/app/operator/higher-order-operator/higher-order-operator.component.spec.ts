import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderOperatorComponent } from './higher-order-operator.component';

describe('HigherOrderOperatorComponent', () => {
  let component: HigherOrderOperatorComponent;
  let fixture: ComponentFixture<HigherOrderOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherOrderOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HigherOrderOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
