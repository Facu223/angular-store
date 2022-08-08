import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { product } from '../products';
import Swal from 'sweetalert2';

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

  getTotal() {
    return this.cart.getTotal()
  }

  emptyCart() {
    this.cart.emptyCart()
    this.Cart = []
    Swal.fire({
      title: '¡Thanks for the buy! Shipping product...',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
  }

}
