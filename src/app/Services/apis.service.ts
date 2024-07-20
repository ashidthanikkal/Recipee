import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }
  getAllRecipes(){
    return this.http.get('https://dummyjson.com/recipes')
  }


}
