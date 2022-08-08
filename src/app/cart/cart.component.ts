import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cart: CartService) {}
  Cart: Array<product> = this.cart.cart;
  deleteFromCart(idItem: number) {
    this.cart.deleteFromCart(idItem)
  }
}
