import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ContentComponent} from '../page-content/content/content.component';
import {HeaderComponent} from '../page-content/header/header.component';
import {AboutAsComponent} from '../page-content/tabs/about-as/about-as.component';
import {ActivityComponent} from '../page-content/tabs/activity/activity.component';
import {InvestigationComponent} from '../page-content/tabs/investigation/investigation.component';
import {EventsComponent} from '../page-content/tabs/events/events.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'onama',
    component: AboutAsComponent
  },
  {
    path: 'aktivnosti',
    component: ActivityComponent
  },
  {
    path: 'istrazivanja',
    component: InvestigationComponent
  },
  {
    path: 'dogadjaji',
    component: EventsComponent
  }
];

export const myRouting: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
