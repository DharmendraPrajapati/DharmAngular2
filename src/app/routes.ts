import {Routes} from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

export const appRoutes:Routes = [
    {path:'events/new', component:CreateEventComponent},
    {path:'events', component:EventListComponent},
    // {path:'events/new', component:CreateEventComponent}, // Remove this event object to top because both path is same and router get comfuse between 'new' and ':id', so move 'event/new' at top
    {path:'events/:id', component: EventDetailsComponent},
    {path:'', redirectTo :'/events', pathMatch:'full'}
]