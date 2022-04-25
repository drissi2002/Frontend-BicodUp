import { Injectable } from '@angular/core';
import basUrl from './helper';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    
  })
};

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



