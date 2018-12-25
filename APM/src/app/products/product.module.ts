import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list-componenet';
import { DetailComponent } from './detail/detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
// ngModel import
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailGuard } from './detail/guard/detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    DetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule, // ngModel import
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent}, // all products
      {path: 'products/:id', 
        canActivate: [ DetailGuard ],
        component: DetailComponent}, //product detail
    ]),
    SharedModule
  ]
})
export class ProductModule { }
