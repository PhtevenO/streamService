import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  // postAPIData(){
  //   return this.http.post('/api/postData', {'firstName' : 'Code', 'lastName' : 'Handbook'})
  // }

  getAPIData(){
  	return this.http.get('/api/getData')
  }



}
