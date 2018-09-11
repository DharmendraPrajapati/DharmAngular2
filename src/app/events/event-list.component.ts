import { Component, OnInit } from '@angular/core'
import { EventService } from '../Services/event.service';

@Component({
    templateUrl : './event-list.component.html'
})
export class EventListComponent implements OnInit{
  events:any[];
  constructor(private eventService : EventService){    
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();      
  }
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

