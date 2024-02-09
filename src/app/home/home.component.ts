import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any=[]
item: any;

  constructor(public api:ApiService){}
  
  ngOnInit() {
    this.api.getData().subscribe(response =>{
      this.data=response
    })
  }
}
