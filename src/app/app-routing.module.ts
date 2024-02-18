import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './componentes/home-component/home-component.component';
import { ProductDetailsComponent } from './componentes/products/product-details/product-details.component';
import { ProductFormComponent } from './componentes/products/product-form/product-form.component';
import { ProductsTableComponent } from './componentes/products/products-table/products-table.component';

const routes: Routes = [
  { path: '', component:HomeComponentComponent },
{ path: 'products', component:ProductsTableComponent  },
{ path: 'products/:id', component:ProductDetailsComponent  },
{ path: 'products/:id/edit', component: ProductFormComponent },
// { path: '**', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
