//pan
import pan1 from '../images/pan/Pan1.jpg';
import pan2 from '../images/pan/Pan2.jpg';
import pan3 from '../images/pan/Pan3.jpg';
import pan4 from '../images/pan/Pan4.jpg';
import pan5 from '../images/pan/Pan5.jpg';
import pan6 from '../images/pan/Pan6.jpg';

// Album 2: Nature (Example)
import dulce1 from '../images/dulce/Dulce1.jpg';
import dulce2 from '../images/dulce/Dulce2.jpg';
import dulce3 from '../images/dulce/Dulce3.jpg';
import dulce4 from '../images/dulce/Dulce4.jpg';

// Album 3: Portraits (Example)
import leche1 from '../images/leche/Leche1.jpg';
import leche2 from '../images/leche/Leche2.jpg';

// 2. DEFINE THE ALBUMS
export const albums = [
    {
        id: "1",
        title: "pan", // Name of Album 1
        slug: "pan",        // URL: /architecture
        description: "Smart but stupid",
        photos: [                  
            { id: "p1", src: pan1 },
            { id: "p2", src: pan2 },
            { id: "p3", src: pan3 },
            { id: "p4", src: pan4 },
            { id: "p5", src: pan5 },
            { id: "p6", src: pan6 },
        ]
    },
    {
        id: "2",
        title: "dulce",
        slug: "dulce",
        description: "favorite",
        photos: [
            { id: "d1", src: dulce1 },
            { id: "d2", src: dulce2 },
            { id: "d3", src: dulce3 },
            { id: "d4", src: dulce4 },
        ]
    },
    {
        id: "3",
        title: "leche",
        slug: "leche",
        description: "follower",
        photos: [
            { id: "l1", src: leche1 },
            { id: "l2", src: leche2 },
        ]
    }
];
