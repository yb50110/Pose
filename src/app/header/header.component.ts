import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    constructor() {}

    isOpen: boolean;

    ngOnInit() {
        this.isOpen = false;
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

    // fixed header
    // spin of 18
    // moving of pose line
}
