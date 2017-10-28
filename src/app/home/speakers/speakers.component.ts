import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Speakers} from './speakers';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
})

export class SpeakersComponent implements OnInit, AfterViewChecked {
    speakers = Speakers;
    readMore: boolean;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.readMore = false;
    }

    ngAfterViewChecked() {
        (<any>$('.owl-carousel.speakers')).owlCarousel({
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

    openReadMore(speaker) {
        for (const eachSpeaker of this.speakers) {
            eachSpeaker.readMore = false;  // reset so all speaker's readmore is closed
        }
        speaker.readMore = true;
    }

    closeReadMore(speaker) {
        speaker.readMore = false;
    }
}

