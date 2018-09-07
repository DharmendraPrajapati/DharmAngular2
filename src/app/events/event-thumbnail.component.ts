import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector : 'event-thumbnail',
    templateUrl : './event-thumbnail.component.html',
    styles : [` 
    .green {color : green !important;}
    .bold {font-weight : bold;}
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
    private getTimeClass(firstEvent)
    {
        var expFlag = firstEvent.time ==='8:00 am';
        // here we can return object or string with spaces and array of classes.
        // return "green bold";
        // return ['green','bold'];
        return {green:expFlag,bold:expFlag};        
    }
    private getPriceStyle(firstEvent)
    {
        if(firstEvent && firstEvent.time === '8:00 am'){
        return {color:'red','font-weight':'bold'};
        }
        return {color:'#bbb','font-weight':'normal'};
    }
}
