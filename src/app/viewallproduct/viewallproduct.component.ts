import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallproduct',
  templateUrl: './viewallproduct.component.html',
  styleUrls: ['./viewallproduct.component.css']
})
export class ViewallproductComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi() }

  dataFromApi=()=>{

    this.api.fetchProduct().subscribe(

      (response)=>{
        this.product=response
      }
    )
  }

  product:any=[ ]

  ngOnInit(): void {
  }

}
