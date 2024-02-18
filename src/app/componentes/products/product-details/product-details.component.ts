import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStaticService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productId: number = 0;
  product: any;
  sub1:any;
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public _productService: ProductStaticService
  ) {}
  //id =>i will take it from the path of the routing
  //then i will get the details of the element with that id
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.sub1=this._productService.getProductId(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }
  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
   
  }
  backToProduct() {
    this.router.navigate(['/products']);
  }
}
