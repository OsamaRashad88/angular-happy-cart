import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService   {

  constructor(private productsservice:HttpClient) {
    
  }
getdata():Observable<any>{
  return this.productsservice.get("https://ecommerce.routemisr.com/api/v1/products")
}
  
getproductdetails(id:string):Observable<any>{
  return this.productsservice.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
}
