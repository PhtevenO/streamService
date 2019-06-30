import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';

// import {SingleMediaPlayer} from './single-media-player';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // SingleMediaPlayer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgStreamingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
