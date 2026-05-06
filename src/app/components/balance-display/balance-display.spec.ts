import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDisplay } from './balance-display';

describe('BalanceDisplay', () => {
  let component: BalanceDisplay;
  let fixture: ComponentFixture<BalanceDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
