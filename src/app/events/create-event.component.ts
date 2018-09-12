import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'',
    templateUrl:'./create-event.component.html'
})
export class CreateEventComponent{
    constructor(private routerServ : Router){}

    Cancel() {
        this.routerServ.navigate(['/events']);
    }
}