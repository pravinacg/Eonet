import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EventDetailComponent} from './event-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
,FormsModule   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
