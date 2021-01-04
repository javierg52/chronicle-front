import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideopageComponent } from './components/videopage/videopage.component';
import { NotespageComponent } from './components/notespage/notespage.component';
import { MediaRetrievalService } from './services/media-retrieval.service';
import { VideoPanelComponent } from './components/panels/video-panel/video-panel.component';
import { NotePanelComponent } from './components/panels/note-panel/note-panel.component';
import { UploadpageComponent } from './components/uploadpage/uploadpage.component';
import { UploadService } from './services/upload.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    VideopageComponent,
    NotespageComponent,
    VideoPanelComponent,
    NotePanelComponent,
    UploadpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UploadService,
    MediaRetrievalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
