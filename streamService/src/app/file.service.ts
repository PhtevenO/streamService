import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  getAPIData(){
  	return this.http.get('http://localhost:3000/getData')
  }

  pipeLink(){
    return this.http.get('http://localhost:3000/getVideo');
  }

  getProgram(){
    return this.http.get('http://localhost:3000/program');
  }
}
