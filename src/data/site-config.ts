import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://taigael.com',
    avatar: {
        src: avatar,
        alt: 'Wind&Bones'
    },
    title: 'Tâigael: Stories from Taiwanese and Gaelic',
    subtitle: 'A new book, publishing stories in translation from Taiwanese to Gaelic, and back again.',
    description: 'A new book, publishing stories in translation from Taiwanese to Gaelic, and back again.',
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
        title: '',
        text: "Four Writers | Four Stories | Four Languages",
        image: {
            src: '/images/hero.webp',
            alt: 'Between Scotland and Taiwan'
        },
        actions: [
            {
                text: 'Find out more...',
                href: '/about'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to the Wind&Bones Newsletter',
        text: 'Get updates on our projects in Scotland, Taiwan and beyond!',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
