import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BuyPipe } from '../buy.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CurrencyPipe,BuyPipe,FormsModule,SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  serachterm:string=''
  products:any []=[]
constructor(private _products:ProductsService){}
ngOnInit(): void {
  this._products.getdata().subscribe({
    next:(res)=>this.products=res.data
  })
}
}
