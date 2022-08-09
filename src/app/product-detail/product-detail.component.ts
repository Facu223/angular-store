import { Component, Input } from '@angular/core';
import { product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input() product!: product;
  constructor(private cart: CartService) {}
  addToCart(item: product) {
    this.cart.addToCart(item);
  }

  title: string = 'Click for more information';
}
