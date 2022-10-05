import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBasicComponent } from './operator-basic.component';

describe('OperatorBasicComponent', () => {
  let component: OperatorBasicComponent;
  let fixture: ComponentFixture<OperatorBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
