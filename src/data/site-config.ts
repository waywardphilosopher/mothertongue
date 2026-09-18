import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
<<<<<<< HEAD
    title: 'Tâigael: Stories from Taiwanese and Gaelic',
    subtitle: 'A new book, publishing stories in translation from Taiwanese to Gaelic, and back again.',
    description: 'Working with writers from Taiwan and Scotland to commission and translate short stories between Tâi-gí (Taiwanese) and Gaelic. Supported by the Scottish Connections Fund.',
=======
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Dante',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
>>>>>>> upstream/main
    image: {
        src: '/images/hero.jpeg',
        alt: 'From Scotland to Taiwan'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Stories & Storytellers',
            href: '/stories'
    },
        {
            text: 'News',
            href: '/blog'
        },
        {
            text: 'Reviews',
            href: '/reviews'
        },
        {
            text: 'Resources',
            href: '/resources'
        },
        {
            text: 'Press',
            href: '/press'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://facebook.com/windandboneswriting'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/windandboneswriting'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/windandbones.bsky.social/'
        }
    ],
    hero: {
<<<<<<< HEAD
        title: '',
        text: "Four Writers | Four Stories | Four Languages",
        image: {
            src: '/images/hero.webp',
            alt: 'Between Scotland and Taiwan'
=======
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence.\nMy approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products.\nI have a profound appreciation for top-notch software, visual design, and the principles of product-led growth.\n\nFeel free to explore some of my coding endeavors on [GitHub](https://github.com/JustGoodUI/dante-astro-theme) or follow me on [Twitter/X](https://twitter.com/justgoodui).",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
>>>>>>> upstream/main
        },
        actions: [
            {
                text: 'Find out more...',
                href: '/about'
            }
        ]
    },
    subscribe: {
<<<<<<< HEAD
        title: 'Subscribe to the Wind&Bones Newsletter',
        text: 'Get updates on our projects in Scotland, Taiwan and beyond!',
        formUrl: '#'
=======
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
>>>>>>> upstream/main
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
