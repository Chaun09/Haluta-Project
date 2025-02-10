import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  isShow = false;
  // Danh sách sản phẩm
  products: Array<{
    image: string;
    imageStar: string;
    name: string;
    currentPrice: string;
    originalPrice: string;
    discount: string;
    rating: number;
    reviews: number;
  }> = [
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 24,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 24,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 25,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 24,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/11/21/anh-nen-cay-xanh-tinh-yeu_103837761.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 24,
    },
    {
      image:
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-co-don_093245160.jpg',
      name: 'Cây Tùng Bonsai',
      currentPrice: '8.990.000đ',
      originalPrice: '10.000.000đ',
      discount: 'Giảm -20%',
      imageStar:
        'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.45/pc/d7099d3fd1dfdaf705ab.svg',
      rating: 4,
      reviews: 24,
    },
    // Thêm các sản phẩm khác...
  ];
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
