import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcaustMapComponent } from './excaust-map.component';

describe('ExcaustMapComponent', () => {
  let component: ExcaustMapComponent;
  let fixture: ComponentFixture<ExcaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcaustMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
