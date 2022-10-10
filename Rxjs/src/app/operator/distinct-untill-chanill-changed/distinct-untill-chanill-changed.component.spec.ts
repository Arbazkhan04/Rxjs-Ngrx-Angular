import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntillChanillChangedComponent } from './distinct-untill-chanill-changed.component';

describe('DistinctUntillChanillChangedComponent', () => {
  let component: DistinctUntillChanillChangedComponent;
  let fixture: ComponentFixture<DistinctUntillChanillChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctUntillChanillChangedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctUntillChanillChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
