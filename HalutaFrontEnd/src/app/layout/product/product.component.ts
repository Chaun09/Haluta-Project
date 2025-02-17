import { ProductService } from './../../service/product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private ProductService: ProductService) {}
  isShow = false;
  // Danh sách sản phẩm
  products: any = [];

  ngOnInit() {
    this.ProductService.getProducts().subscribe((data) => {
      this.products = data.content;
      console.log(this.products);
    });
  }
  // Số lượng sản phẩm hiển thị mỗi lần
  itemsToShow = 8;
  counter = 0;
  visibleProducts = this.products.slice(0, this.itemsToShow);

  // Hàm tải thêm sản phẩm
  load() {
    // this.counter += this.itemsToShow;
    // const nextProducts = this.products.slice(
    //   this.counter,
    //   this.counter + this.itemsToShow
    // );
    // this.visibleProducts = [...this.visibleProducts, ...nextProducts];
    this.isShow = !this.isShow;
    this.visibleProducts = this.products.slice(0, this.itemsToShow * 2);
  }
  hidden() {
    // this.counter -= this.counter;
    // const nextProducts = this.products.slice(
    //   this.counter,
    //   this.counter + this.itemsToShow
    // );
    this.isShow = !this.isShow;
    this.visibleProducts = this.products.slice(0, this.itemsToShow);
  }
}
