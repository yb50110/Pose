export const Lodging: lodging[] = [
    {
        name: 'Sheraton',
        imageUrl: 'sheraton.jpg',
        siteUr: 'http://www.sheratonnewyork.com',
        singleRate: '$170',
        doubleRate: '$125',
        distance: '1 Block',
        description: 'This Marriott is the perfect hotel for any type of traveler. Within walking distance of the conference ' +
        'and downtown\'s diverse collection of galleries, shops and restaurants, the Marriott boasts 157 boutique-style guest ' +
        'rooms. Our hotel offers dining in Canyons Restaurant & Lounge or the convenience of in-room dining.',
        readMore: false
    },
    {
        name: 'Marriott',
        imageUrl: 'marriott.jpg',
        siteUr: 'http://www.marriott.com/hotel-search/new-york.hotels.new-york.united-states.travel',
        singleRate: '$180',
        doubleRate: '$120',
        distance: '2 Blocks',
        description: 'This Sheraton is located in one of the city’s most beautiful neighborhoods. The property is centrally ' +
        'located in downtown, and is near most popular attractions, making it the perfect fit for business or leisure travelers. ' +
        'The Sheraton is easily accessible to major corporations, restaurants, and parks. Hotel guests can enjoy a complimentary ' +
        'shuttle to get to their destination with ease. The shuttle also provides transportation to, and from, the nearby airport, ' +
        'which is located just minutes from the property.',
        readMore: false
    },
];

interface lodging {
    name: string;
    imageUrl: string;
    siteUr: string;
    singleRate: string;
    doubleRate: string;
    distance: string;
    description: string;
    readMore: boolean;
}
