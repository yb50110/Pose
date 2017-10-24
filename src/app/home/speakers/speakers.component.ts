import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',

})
export class SpeakersComponent implements OnInit {
    speakers = [
        {
            fName: 'Airi',
            lName: 'Nakamura',
            imageUrl: 'airi-nakamura-3.png',
            viewing: true
        },
        {
            fName: 'Allycia',
            lName: 'London',
            imageUrl: 'allycia-london-3.png',
            viewing: false
        },
        {
            fName: 'Chico',
            lName: 'Shakil',
            imageUrl: 'chico-shakil-3.png',
            viewing: false
        },
        {
            fName: 'Colene',
            lName: 'Berny',
            imageUrl: 'colene-berny-3.png',
            viewing: false
        },
        {
            fName: 'Daniel',
            lName: 'Jeptha',
            imageUrl: 'daniel-jeptha-3.png',
            viewing: false
        },
        {
            fName: 'Warren',
            lName: 'Kumar',
            imageUrl: 'warren-kumar-3.png',
            viewing: false
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    // when scroll, move image and then set that to be visible=true and the prev as visible=false
}
