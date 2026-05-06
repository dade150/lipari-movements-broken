import { Component, input, output } from '@angular/core';
import { BankCurrencyPipe } from 'src/app/shared/pipes/bank-currency.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-balance-display',
  imports: [BankCurrencyPipe,DatePipe],
  templateUrl: './balance-display.html',
  styleUrl: './balance-display.scss',
})
export class BalanceDisplay {

  balance = input.required<number>();
  accountName = input.required<string>();
  lastUpdate = input.required<string>();
  refreshRequested = output<void>();

}
