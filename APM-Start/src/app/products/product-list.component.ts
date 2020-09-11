import { Component } from '@angular/core';

@Component({

  selector: 'pm-products',
  templateUrl: './product-list.component.html'

})

export class ProductListComponent {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Product List!';
  imageWidth = 50;
  imageMargin = 2;
  // tslint:disable-next-line: no-inferrable-types
  showImage: boolean = false;
  listFilter = 'cart';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 132.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2019',
      description: 'Curved claw steel hammer',
      price: 89.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png'
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
   }

}
