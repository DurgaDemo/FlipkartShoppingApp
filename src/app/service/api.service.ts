import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products_api="https://fakestoreapi.com/products/"
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.products_api)
    .pipe(map((res:any)=>{
        return res
    }))
  }
}
