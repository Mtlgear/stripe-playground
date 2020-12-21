import { Component } from '@angular/core';

import { CheckoutService } from './checkout.service';

@Component({
  selector: 'stripe-playground-checkout',
  template: ` <div
    style="display: flex; justify-content: center; align-items: center;"
  >
    <button mat-button mat-raised-button (click)="handleClick()">
      Go to checkout
    </button>

    <div *ngIf="!!response">{{ response | json }}</div>
  </div>`,
})
export class CheckoutComponent {
  response: any;
  constructor(private checkoutService: CheckoutService) {}

  handleClick() {
    this.checkoutService.checkout().subscribe((res) => (this.response = res));
  }
}
