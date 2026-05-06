import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountSummary {
  getAccountSummary() {
    return {
      name: 'Conto Principale',
      balance: 12450.00,
      lastUpdate: '2025-03-15T10:30:00'
    };
  }  
}
