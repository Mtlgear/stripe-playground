import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// const SESSION_URL = 'http://localhost:3333/api/session';
const SESSION_URL = 'http://localhost:3000/purchase/checkout-session';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  checkout() {
    return this.http.get(environment.apiUrl + 'cart/checkout');
  }
}
