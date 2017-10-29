import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Schedule} from './schedule';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit, AfterViewChecked {
    schedule = Schedule;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.positionRightNow();
    }

    positionRightNow() {
        // Get the local time using JS
        const date = new Date;
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        const totalMin = minutes + (60 * (hours));

        // 25200sec from the time between 00:00 to 07:00
        const totalSec = (seconds + 60 * totalMin) - 25200;

        // 61200 is all second between 07:00 and 24:00
        // 630 is the number of pixels from 07:00 to 24:00
        const position = totalSec * (630 / 61200);

       // console.log(date);
//        console.log(seconds);
//        console.log(minutes);
//        console.log(hours);
//        console.log(totalSec);
//        console.log(position);

        $('.right-now').css('top', position + 'px');
    }

    ngAfterViewChecked() {
        (<any>$('.owl-carousel.schedule')).owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    margin: 20,
                    items: 3
                }
            }
        });
    }
}
