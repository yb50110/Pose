export const Speakers: speakers[] = [
    {
        fName: 'Airi',
        lName: 'Nakamura',
        imageUrl: 'airi-nakamura-4.png',
        bio: 'uses her strong science background to help life sciences companies with all aspects of ' +
        'public relations and corporate communications. She is currently account director at Canale Communications, ' +
        'an agency exclusively serving the life sciences community.',
        readMore: false
    },
    {
        fName: 'Allycia',
        lName: 'London',
        imageUrl: 'allycia-london-4.png',
        bio: 'is an Assistant Professor in the Business and Public Policy Department at Wharton. ' +
        'Her research focuses on financial market issues in emerging markets. One recent project studies how the ' +
        'regulation of fees has shaped the Indian mutual fund industry.',
        readMore: false
    },
    {
        fName: 'Chico',
        lName: 'Shakil',
        imageUrl: 'chico-shakil-4.png',
        bio: ', born 1965 in Bonn, Germany, studied Visual Communication at the University of Applied ' +
        'Sciences in Düsseldorf. From 1993 to 2000, he lived and worked in Paris. First he collaborated with the ' +
        'Founders of Grapus, Gérard Paris-Clavel and Pierre Bernard, then he founded his own office.',
        readMore: false
    },
    {
        fName: 'Colene',
        lName: 'Berny',
        imageUrl: 'colene-berny-4.png',
        bio: 'is a researcher in the Dept. of Linguistics at UC Berkeley and runs the UC Berkeley ' +
        'Script Encoding Initiative. She is the UC Berkeley representative to the Unicode Consortium, and serves ' +
        'as Liaison for the Linguistic Society of America.',
        readMore: false
    },
    {
        fName: 'Daniel',
        lName: 'Jeptha',
        imageUrl: 'daniel-jeptha-4.png',
        bio: 'is a Senior Software Architect at Basis Technology with over ten years of software ' +
        'engineering experience. He provides architectural and implementation support for the shared linguistic foundation.',
        readMore: false
    },
    {
        fName: 'Warren',
        lName: 'Kumar',
        imageUrl: 'warren-kumar-4.png',
        bio: 'is a senior exploration geologist with 7 years of experience. He has extensive exploration experience in ' +
        'Texas, New Mexico, Oklahoma, Kansas, Arkansas, Louisiana ' +
        'and South America. He graduated from the University of Oklahoma with a B.S. in Geology.',
        readMore: false
    }
];

interface speakers {
    fName: string;
    lName: string;
    imageUrl: string;
    bio: string;
    readMore: boolean;
}
