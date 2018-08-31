import { Component } from '@angular/core'

@Component({
    selector : 'event-list',
    //templateUrl : './event-list.component.html'
    template : `
    <div>
        <h1> Angular Upcoming Event</h1>
        <hr/>
        <event-thumbnail #thumbnailVariable [firstEvent]="eventData" (clickEvent) = "ClickInparent($event)"></event-thumbnail>
        <h5>{{thumbnailVariable.checkMe}}</h5>
    </div>`
})
export class EventListComponent {
    eventData = {
            id:1,
            name: 'First Event',
            date: '20-08-s2018',
            time: '10:15:12 AM',
            price: 12,
            imageUrl : '/assets/Images/angularconnect-shield.png',
            location : {
                address:'Hi-Tech',
                city:'Hyderabad',
                country:'India'
            }            
        };
    ClickInparent = function(data)
    {
        console.log("From Parent");
        console.log(data);
    }
}

