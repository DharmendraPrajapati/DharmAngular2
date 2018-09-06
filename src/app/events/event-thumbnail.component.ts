import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector : 'event-thumbnail',
    templateUrl : './event-thumbnail.component.html',
    styles : [` 
    .pad-left {margin-left:10px;} 
    .well div {color: #bbb;}
    .thumbnail {min-height:210px;}
    `]
})
export class EventThumbnailComponent{
    @Input() firstEvent:any;
    @Output() clickEvent = new EventEmitter();

    private checkMe:string = "access local variable";
    private ClickMe(Id:number):void {
        console.log(Id);
        this.clickEvent.emit(Id);
    }
}
