import { Component } from '@angular/core';
import { BalanceDisplay } from '../balance-display/balance-display';
import { AccountSummary } from 'src/app/services/account-summary';

@Component({
  selector: 'app-account-summary-card',
  standalone: true,
  imports: [BalanceDisplay],
  templateUrl: './account-summary-card.html',
  styleUrl: './account-summary-card.scss',
})
export class AccountSummaryCard {
  account = { name: '', balance: 0, lastUpdate: '' };

  constructor(private accountService: AccountSummary) {}

  ngOnInit() {
    this.account = this.accountService.getAccountSummary();
  }

  onRefresh() {
    console.log('Refresh richiesto!');
    this.account = this.accountService.getAccountSummary();
  }
}
