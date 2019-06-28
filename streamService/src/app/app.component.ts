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
  innerHtml;
  constructor(
    private http: HttpClient,
    private file: FileService
    ) {

   }

   getData(){
    this.file.getAPIData().subscribe((response)=>{
      console.log('response from api ', response)
      this.innerHtml = response['error'];
    }, err=>{
      console.log('error from server ', err);
      this.innerHtml = err['error'];
    })
   }


  public videoUrl = `https://srautas.lrt.lt/lrt_televizija/smil:lrt_televizija.smil/playlist.m3u8?tokenhash=Jc4bqcn3RGnlHQlvrzA8DMFLBocTvPKsvZkQFkINhinagmZ3KiBaXMz2rAy3QLfx46oedciRyZ77T43TaIfxtw==&tokenendtime=1561656614`;

}
