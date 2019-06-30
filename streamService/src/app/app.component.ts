import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileService} from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'streamService';
  videoLink = '';
  headers: any = {'Access-Control-Allow-Origin': '*' };
  constructor(
    private http: HttpClient,
    private file: FileService
    ) {
      this.file.getAPIData().subscribe(res=>{
        this.videoLink = res['link']
        // this.videoLink = 'http://localhost:3000/getData';
        console.log(res);
        // this.headers = res['data']['headers']
        // console.log(this.headers)

      })
   }
}
