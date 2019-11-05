import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiHitService {
    public apiUrl = "https://api.jsonbin.io/b/5d45e4d789ed890b24cb25f5";
    public headers;
  options: any;
  restaurantsList: any;
  details: any;
  constructor(private http: Http) { }


  // fetchData(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }
  setHeaders(){
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers });
    return this.options;
  }
  getGame(){
    let api = this.apiUrl;
    return this.http.get(api, this.setHeaders());
  }
}
