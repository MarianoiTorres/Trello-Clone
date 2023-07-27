import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardpageComponent } from './boardpage.component';

describe('BoardpageComponent', () => {
  let component: BoardpageComponent;
  let fixture: ComponentFixture<BoardpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardpageComponent]
    });
    fixture = TestBed.createComponent(BoardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
