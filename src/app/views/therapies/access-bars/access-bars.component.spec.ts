import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessBarsComponent } from './access-bars.component';

describe('AccessBarsComponent', () => {
  let component: AccessBarsComponent;
  let fixture: ComponentFixture<AccessBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
