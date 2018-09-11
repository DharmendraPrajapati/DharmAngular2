import {Component, OnInit} from '@angular/core';
import { EventService } from '../Services/event.service';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector:'event-details',
    templateUrl : './event-details.component.html',
    styles :[`
    .container {padding-left:20px; padding-right:20px}
    .event-image {height:200px}
    `]
})
export class EventDetailsComponent implements OnInit{
    constructor(private eventService : EventService, private activatedRoute : ActivatedRoute){

    }

    event:any;
    ngOnInit(){
        // console.log(this.activatedRoute.snapshot.params['id']);
        this.event = this.eventService.getEventById(+this.activatedRoute.snapshot.params['id']);
    }
}