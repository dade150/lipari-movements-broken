import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryCard } from './account-summary-card';

describe('AccountSummaryCard', () => {
  let component: AccountSummaryCard;
  let fixture: ComponentFixture<AccountSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSummaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSummaryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
