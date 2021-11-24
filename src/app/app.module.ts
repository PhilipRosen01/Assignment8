import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { HoverCardDirective } from './hover-card.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @ts-ignore
// import {MatButtonModule} from '@angular/material';
// import {MatInputModule} from '@angular/material/input';
// import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TypeFilterPipe,
    HoverStyleDirective,
    HoverCardDirective,
    MessagesComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      dataEncapsulation: false,
      delay: 2000
    }),
    FormsModule
    // MatSliderModule,
    // MatButtonModule,
    // MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
