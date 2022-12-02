import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacespipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacespipe,
  ],
  imports: [
    RouterModule.forChild ([
    { path: "products", component: ProductListComponent },
    {
      path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent
    }
  ]),
    SharedModule
]
})
export class ProductModule { }
