import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FooterComponent} from './page-content/footer/footer.component';
import {HeaderComponent} from './page-content/header/header.component';
import {NavbarComponent} from './page-content/navbar/navbar.component';
import {ContentComponent} from './page-content/content/content.component';
import {myRouting} from './routes/app.routes';
import { AboutAsComponent } from './page-content/tabs/about-as/about-as.component';
import { SaradniciComponent } from './page-content/tabs/activity/saradnici.component';
import { InvestigationComponent } from './page-content/tabs/investigation/investigation.component';
import { EventsComponent } from './page-content/tabs/events/events.component';
import { FiristRowComponent } from './page-content/content/firist-row/firist-row.component';
import { SecondRowComponent } from './page-content/content/second-row/second-row.component';
import { ThirdRowComponent } from './page-content/content/third-row/third-row.component';
import { ScrollButtonComponent } from './page-content/content/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    AboutAsComponent,
    SaradniciComponent,
    InvestigationComponent,
    EventsComponent,
    FiristRowComponent,
    SecondRowComponent,
    ThirdRowComponent,
    ScrollButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    myRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
