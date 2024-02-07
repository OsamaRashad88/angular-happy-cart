import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CurrencyPipe,NgFor,FormsModule],
  templateUrl:'./productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  updateproduct(image:string){
this.productimgsrc=image
  }
  productimgsrc:string=''
  parameter:any=''
  productdetails:any
constructor(private _activatedroute:ActivatedRoute, private _productdetails:ProductsService){}
ngOnInit(): void {
  this._activatedroute.paramMap.subscribe((params)=>{
    this.parameter=params.get('id')
  
  })
  this._productdetails.getproductdetails(this.parameter).subscribe({
    next:res=>{this.productdetails=res.data
      this.productimgsrc=this.productdetails?.imageCover
    }
    
  })

}
}
