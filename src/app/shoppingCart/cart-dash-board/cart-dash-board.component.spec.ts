import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDashBoardComponent } from './cart-dash-board.component';

describe('CartDashBoardComponent', () => {
  let component: CartDashBoardComponent;
  let fixture: ComponentFixture<CartDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
