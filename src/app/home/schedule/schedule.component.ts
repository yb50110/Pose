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
