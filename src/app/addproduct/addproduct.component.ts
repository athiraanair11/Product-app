import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  id=""
  price=""
  title=""
  description=""
  category=""
  rate=""
  count=""


  ngOnInit(): void {
  }

  read=()=>{

    let data={"id":this.id,
  "price":this.price,
"title":this.title,
"description":this.description,
"category":this.category,
"rate":this.rate,
"count":this.count}

console.log(data)
  }



}
