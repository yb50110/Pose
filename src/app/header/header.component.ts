import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() {}

    isOpen: boolean;
    isSticky: boolean;
    headerOffset: number;

    ngOnInit() {
        this.isOpen = false;
        this.isSticky = false;
        // get offset for header... used in stickyHeader()
        // offset is set here so that the value does not change even after pushing it to the top of the screen
        this.headerOffset = document.getElementById('pose-header-background').offsetTop;
    }

    openMenu() {
        this.isOpen = true;
    }
    closeMenu() {
        this.isOpen = false;
    }

    scrollTo(section) {
        const menu = document.getElementById('pose-menu');
        const goto = document.getElementById('pose-section-' + section);
        // smooth scroll to section
        $('html,body').animate({
            scrollTop: $(goto).offset().top
        }, 1000);
        // close menu
        this.isOpen = false;
    }

    stickyHeader() {
        if (window.pageYOffset >= this.headerOffset) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
        if (window.pageYOffset >= 120) {
            $('.menu-button .year').addClass('hide');
            $('.menu-button .hamburger').removeClass('hide');
        } else {
            $('.menu-button .year').removeClass('hide');
            $('.menu-button .hamburger').addClass('hide');
        }
    }

    // spin of 18
    // moving of pose line
}
