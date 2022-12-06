import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadionicsTableComponent } from './radionics-table.component';

describe('RadionicsTableComponent', () => {
  let component: RadionicsTableComponent;
  let fixture: ComponentFixture<RadionicsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadionicsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadionicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
