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
  programa;
  constructor(
    private http: HttpClient,
    private file: FileService
    ) {
      this.getVideoPipe();
      this.getProgram();
   }


   getVideoPipe(){
     this.file.pipeLink().subscribe(res=>{
       this.videoLink = res['response']['data']['content'];
     })
   }

   getProgram(){
     this.file.getProgram().subscribe(res=>{
       console.log(res);
       this.programa = res['tvprog']['items'];
       console.log(this.programa)
     })
   }


}
