import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnreDecreComponent } from './innre-decre.component';

describe('InnreDecreComponent', () => {
  let component: InnreDecreComponent;
  let fixture: ComponentFixture<InnreDecreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnreDecreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnreDecreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
