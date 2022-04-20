import { Injectable } from '@angular/core';
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

  constructor(private http:HttpClient) {}
  public categories(){
    return this.http.get('http://localhost:8010/category/');
        }
  //add category
public addCategory(category:any){
    return this.http.post('http://localhost:8010/category/add',category);
  }
}
