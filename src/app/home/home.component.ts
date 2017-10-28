import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HomeImages} from './home-images';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewChecked {
    homeImages = HomeImages;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        const owlAutoplay = (<any>$('.owl-carousel.autoplay'));
        owlAutoplay.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            items: 1,
        });
        $('.play').on('click', function () {
            owlAutoplay.trigger('play.owl.autoplay', [1000]);
        });
        $('.stop').on('click', function () {
            owlAutoplay.trigger('stop.owl.autoplay');
        });
    }
}
