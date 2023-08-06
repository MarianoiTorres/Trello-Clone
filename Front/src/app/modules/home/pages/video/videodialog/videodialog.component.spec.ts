import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodialogComponent } from './videodialog.component';

describe('VideodialogComponent', () => {
  let component: VideodialogComponent;
  let fixture: ComponentFixture<VideodialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideodialogComponent]
    });
    fixture = TestBed.createComponent(VideodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
