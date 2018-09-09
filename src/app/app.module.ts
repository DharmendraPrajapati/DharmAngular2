import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';

import {EventService} from './Services/event.service';
import {ToastrService} from './Services/toasrt.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
