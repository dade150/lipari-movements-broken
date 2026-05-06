import { Component } from '@angular/core';
import { AccountMovementsComponent } from './features/accounts/containers/account-movements/account-movements.component';
import { AccountSummaryCard } from './components/account-summary-card/account-summary-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccountMovementsComponent, AccountSummaryCard],
  templateUrl: './app.component.html'
})
export class AppComponent {}
