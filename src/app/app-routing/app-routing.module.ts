import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, Route, RouterModule, Routes} from "@angular/router";
import {TimelinesComponent} from "../timelines/timelines.component";
import {YoutubePlaylistComponent} from "../youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "../youtube-player/youtube-player.component";
import {BlogComponent} from "../blog/blog.component";
import {BlogEditComponent} from "../blog-edit/blog-edit.component";
import {BlogDetailComponent} from "../blog-detail/blog-detail.component";

const  routes : Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


