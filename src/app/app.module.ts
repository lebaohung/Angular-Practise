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

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FontSizeEditorComponent,
    HackernewsComponent,
    PetComponent,
    NameCardComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
