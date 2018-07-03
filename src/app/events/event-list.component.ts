import { Component } from '@angular/core'

@Component({
    selector : 'event-list',
    //templateUrl : './event-list.component.html'
    template : `
    <div>
        <h1> Angular Upcoming Event</h1>
        <hr/>
        <event-thumbnail [firstEvent]="eventData" (clickEvent) = "ClickInparent($event)"></event-thumbnail>
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
                address:'My address',
                city:'city',
                country:'country'
            }            
        };
    ClickInparent = function(data)
    {
        console.log("From Parent");
        console.log(data);
    }
}

