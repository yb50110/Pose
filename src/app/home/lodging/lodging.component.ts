import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Lodging} from './lodging';

@Component({
    selector: 'app-lodging',
    templateUrl: './lodging.component.html',
})
export class LodgingComponent implements OnInit, AfterViewChecked {
    lodging = Lodging;
    readMore: boolean;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.readMore = false;
    }

    ngAfterViewChecked() {
        (<any>$('.owl-carousel.lodging')).owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    margin: 20,
                    items: 2
                }
            }
        });
    }

    openReadMore(lodge) {
        for (const eachLodge of this.lodging) {
            eachLodge.readMore = false;  // reset so all lodge's readmore is closed
        }
        lodge.readMore = true;
    }

    closeReadMore(lodge) {
        lodge.readMore = false;
    }

}
