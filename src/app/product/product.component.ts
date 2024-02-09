import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SlicePipe } from '@angular/common';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SlicePipe,ProductdetailsComponent,RouterOutlet,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data:any=[]

  constructor(public api:ApiService){}
  
  ngOnInit() {
    this.api.getData().subscribe(response =>{
      this.data=response
    })
  }
  printStars(rating: number): string {
    const fullStars: number = Math.floor(rating);
    const halfStar: boolean = rating % 1 !== 0;
    const emptyStars: number = 5 - fullStars - (halfStar ? 1 : 0);
    let starsHTML: string = '★'.repeat(fullStars);
  
    if (halfStar) {
      starsHTML += '★';
    }
    starsHTML += '☆'.repeat(emptyStars);
    return starsHTML;
  }
  
}

