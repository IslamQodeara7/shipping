import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpOnOrdersComponent } from './follow-up-on-orders.component';

describe('FollowUpOnOrdersComponent', () => {
  let component: FollowUpOnOrdersComponent;
  let fixture: ComponentFixture<FollowUpOnOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpOnOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpOnOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
