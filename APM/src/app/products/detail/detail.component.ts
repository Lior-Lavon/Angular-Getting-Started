import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  // selector: 'pm-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pageTitle: string = 'Product detail';
  product: IProduct;
  errorMessage: string;
  imageWidth: number = 50;
  imageMargin: number = 2;

  
  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router) {
    
  }

  ngOnInit() {
    // get the product id from the route
    let id = this.route.snapshot.paramMap.get('id');
    //this.pageTitle += `${id}`;

    this.productService.getProductById(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
