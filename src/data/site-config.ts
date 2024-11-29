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
    title: 'Mother Tongue Manifesto',
    subtitle: 'Translating Between Gàidhlig and Tâi-gí',
    description: 'A project by Wind&Bones',
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
            text: 'Who We Are',
            href: '/whoweare'
    },
        {
            text: 'News',
            href: '/blog'
        },
        {
            text: 'Resources',
            href: '/resources'
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
