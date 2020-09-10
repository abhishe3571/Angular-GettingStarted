import { Component } from '@angular/core';

@Component({

  selector: 'pm-products',
  templateUrl: './product-list.component.html'

})

export class ProductListComponent {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Product List!';

}
