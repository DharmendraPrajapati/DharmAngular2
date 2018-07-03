import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector : 'event-thumbnail',
    template : `<div class="well howerwell thumbnail">
                    <h2> {{firstEvent.name}} </h2>
                    <div> Date : {{firstEvent.date}} </div>
                    <div> Time : {{firstEvent.time}} </div>
                    <div> Price : \${{firstEvent.price}} </div>
                    <div>  </div>
                    <div> Location :
                        <span> {{firstEvent.location.address}} </span>
                        <span> &nbsp; </span>
                        <span> {{firstEvent.location.city}} , {{firstEvent.location.country}} </span>
                    </div>
                    <button class="btn btn-primary" (click)="ClickMe(firstEvent.id)">Submit</button>
                </div>
                `
})
export class EventThumbnailComponent{
    @Input() firstEvent:any;
    @Output() clickEvent = new EventEmitter();
    ClickMe(Id:number):void {
        console.log(Id);
        this.clickEvent.emit(Id);
    }
}
