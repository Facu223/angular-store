import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: product | undefined

  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId: number = Number(routeParams.get('id'));
    this.product = products.find(product => product.id === productId)
  }

  addToCart(item: product) {
    this.cart.addToCart(item);
  }

}
