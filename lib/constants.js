/**
 * Application-wide constants
 * Centralized configuration for easy maintenance
 */

// Site Configuration
export const SITE_CONFIG = {
    name: 'Peskas™',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://peskas.org',
    description: 'Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights.',
};

// Google Analytics
export const GA_ID = 'G-K31B8LMLQZ';
export const GA_ENABLED = process.env.NODE_ENV === 'production';

// Blog Configuration
export const BLOG_CONFIG = {
    title: 'Peskas Blog',
    description: 'Technical and not so technical musings about the Peskas platform',
    postsPerPage: 10,
    latestPostsCount: 3,
};

// Metadata Defaults
export const DEFAULT_METADATA = {
    // Absolute base for the link-preview image (app/opengraph-image.png) and other metadata URLs
    metadataBase: new URL(SITE_CONFIG.url),
    title: `${SITE_CONFIG.name} - Open-source digital platform for small-scale fisheries`,
    description: SITE_CONFIG.description,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        siteName: SITE_CONFIG.name,
    },
    twitter: {
        card: 'summary_large_image',
    },
};
