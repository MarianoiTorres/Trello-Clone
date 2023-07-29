import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationPageComponent } from './invitation-page.component';

describe('InvitationPageComponent', () => {
  let component: InvitationPageComponent;
  let fixture: ComponentFixture<InvitationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitationPageComponent]
    });
    fixture = TestBed.createComponent(InvitationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
