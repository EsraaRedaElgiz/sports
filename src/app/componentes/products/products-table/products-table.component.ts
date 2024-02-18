import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iProduct';
import { ProductStaticService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent {
  products: any = [];
  constructor(public _productService: ProductStaticService) {}
  //constructor used for intialization and injection
  ngOnInit(): void {
    this._productService.getAllProduct().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteProductHandler(id: any) {
    this._productService.deleteProduct(id).subscribe({
      next: (data) => {
        this.products = this.products.filter(
          (product: any) => product.id != id
        );
      },
      error: (err) => console.log(err),
    });
  }
}
