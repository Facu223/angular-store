import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<product> = [];

  addToCart(item: product): void {
    this.cart.push(item);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Item added successfully',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  deleteFromCart(idItem: number): void {
    const item: number = this.cart.findIndex((item) => item.id === idItem);
    this.cart.splice(item, 1);
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Item deleted successfully',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  getLength() {
    return this.cart.length;
  }

  getTotal() {
    const total = this.cart.reduce(
      (acc, currentValue) => acc + currentValue.price,
      0
    );
    return total;
  }

  emptyCart() {
    this.cart = [];
  }
}
