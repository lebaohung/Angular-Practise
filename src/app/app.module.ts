import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { FormsModule } from "@angular/forms";
import { HackernewsComponent } from './PractiseOnDemoBase/hackernews.component';
import { PetComponent } from './pet/pet.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from "./image-gallery/token";
import {ImgSliderModule} from "./img-slider/img-slider.module";

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FontSizeEditorComponent,
    HackernewsComponent,
    PetComponent,
    NameCardComponent,
    ProgressBarComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ImageGalleryModule,
    ImgSliderModule
  ],
  providers: [{
    provide: GalleryConfig, useValue: 2
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
