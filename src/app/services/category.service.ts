import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import basUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) {}
  public categories(){
    return this._http.get(`${basUrl}/category/`);
        }
  //add category
public addCategory(category:any){
    return this._http.post(`${basUrl}/category/add`,category);
  }
}