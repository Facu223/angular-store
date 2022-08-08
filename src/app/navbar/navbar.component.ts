import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { product } from '../products';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private cart: CartService) {}

  length(): number {
    return Number(this.cart.getLength());
  }
}
