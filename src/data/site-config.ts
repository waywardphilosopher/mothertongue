export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Tâigael: Stories from Taiwanese and Gaelic',
    subtitle: 'A new book, publishing stories in translation from Taiwanese to Gaelic, and back again.',
    description: 'Working with writers from Taiwan and Scotland to commission and translate short stories between Tâi-gí (Taiwanese) and Gaelic. Supported by the Scottish Connections Fund.',
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
        title: 'Subscribe to the Wind&Bones Newsletter',
        text: 'Get updates on our projects in Scotland, Taiwan and beyond!',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
