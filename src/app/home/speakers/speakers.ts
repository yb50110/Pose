export const Speakers: speakers[] = [
    {
        fName: 'Airi',
        lName: 'Nakamura',
        imageUrl: 'airi-nakamura-4.png',
        bio: 'uses her strong science background to help life sciences companies with all aspects of ' +
        'public relations and corporate communications. She is currently account director at Canale Communications, ' +
        'an agency exclusively serving the life sciences community.'
    },
    {
        fName: 'Allycia',
        lName: 'London',
        imageUrl: 'allycia-london-4.png',
        bio: 'is an Assistant Professor in the Business and Public Policy Department at Wharton. ' +
        'Her research focuses on financial market issues in emerging markets. One recent project studies how the ' +
        'regulation of fees has shaped the Indian mutual fund industry.'
    },
    {
        fName: 'Chico',
        lName: 'Shakil',
        imageUrl: 'chico-shakil-4.png',
        bio: ', born 1965 in Bonn, Germany, studied Visual Communication at the University of Applied ' +
        'Sciences in Düsseldorf. From 1993 to 2000, he lived and worked in Paris. First he collaborated with the ' +
        'Founders of Grapus, Gérard Paris-Clavel and Pierre Bernard, then he founded his own office.'
    },
    {
        fName: 'Colene',
        lName: 'Berny',
        imageUrl: 'colene-berny-4.png',
        bio: 'is a researcher in the Dept. of Linguistics at UC Berkeley and runs the UC Berkeley ' +
        'Script Encoding Initiative (and its NEH-sponsored sibling, the Universal Scripts Project). She is the UC ' +
        'Berkeley representative to the Unicode Consortium, and serves as Liaison for the Linguistic Society of America.'
    },
    {
        fName: 'Daniel',
        lName: 'Jeptha',
        imageUrl: 'daniel-jeptha-4.png',
        bio: 'is a Senior Software Architect at Basis Technology with over ten years of software ' +
        'engineering experience. He designed and implemented the low-level foundations of many of Basis Technology\'s ' +
        'Language Analysis products and now provides architectural and implementation support for the shared linguistic foundation.'
    },
    {
        fName: 'Warren',
        lName: 'Kumar',
        imageUrl: 'warren-kumar-4.png',
        bio: 'is a senior exploration geologist with 7 years of oil and gas experience in the petroleum ' +
        'industry. He has extensive exploration experience in Texas, New Mexico, Oklahoma, Kansas, Arkansas, Louisiana ' +
        'and South America. He attended the United States Naval Academy as an ocean engineer and graduated from the ' +
        'University of Oklahoma with a B.S. in Geology.'
    }
];

interface speakers {
    fName: string;
    lName: string;
    imageUrl: string;
    bio: string;
}
