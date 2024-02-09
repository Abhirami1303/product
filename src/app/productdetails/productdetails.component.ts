import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterOutlet,ProductComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
item: any;
  constructor(private routeId:ActivatedRoute,private api:ApiService) {}
    data : any=[]
    rating:number=0
    n:number = 0
    ngOnInit(){
      this.api.getData().subscribe((res:any) =>{
      let id=this.routeId.snapshot.paramMap.get('id')

      let response=res
      let product=response.filter((e:any)=>e.id==id)
      this.data=product[0]
    
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
