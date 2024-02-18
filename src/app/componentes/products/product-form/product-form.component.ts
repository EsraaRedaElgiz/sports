import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iProduct';
import { ProductStaticService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  product: any;
  productId: any;
  submitUntouchedError: string = '';
  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  constructor(
    public _productService: ProductStaticService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.productId = this.activatedRoute.snapshot.params['id'];
    //عملتها كده عشان يغير في ال url لو ضغطت ع اضافه منتج وانا ف التعديل
    this.sub1 = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getImage.setValue('')
        this.getName.setValue('');
        this.getPrice.setValue(null);
        this.getQuantity.setValue(null);
      },
    });
    if (this.productId != 0) {
      this.sub2 = this._productService.getProductId(this.productId).subscribe({
        next: (data) => {
          this.product = data;
          this.getImage.setValue(this.product.img)
          this.getName.setValue(this.product.name);
          this.getPrice.setValue(this.product.price);
          this.getQuantity.setValue(this.product.quantity);
        },
      });
    }
  }
  //ondestroy to unscribe
  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }
  productForm = new FormGroup({
    img:new FormControl('',[Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required, Validators.min(10)]),
    quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
  });

  get getImage(){
    return this.productForm.controls['img']
  }
  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  formOperation(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      this.submitUntouchedError = '';

      if (this.productId != 0) {
        //edit Product
        this.sub3 = this._productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      } else {
        // add Product
        this.sub4 = this._productService
          .addProduct(this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    } else if (this.productForm.status == 'INVALID') {
      if (
        this.productForm.controls.img.touched==false||
        this.productForm.controls.name.touched == false ||
        this.productForm.controls.price.touched == false ||
        this.productForm.controls.quantity.touched == false
      ) {
        this.submitUntouchedError = 'You Must enter all data';
      } else {
        this.submitUntouchedError = '';
      }

    }
  }
}
