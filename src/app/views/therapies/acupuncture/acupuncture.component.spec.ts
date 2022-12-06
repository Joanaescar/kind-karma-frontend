import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunctureComponent } from './acupuncture.component';

describe('AcupunctureComponent', () => {
  let component: AcupunctureComponent;
  let fixture: ComponentFixture<AcupunctureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcupunctureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcupunctureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
