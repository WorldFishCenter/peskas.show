import HomePageClient from '@/components/sections/HomePageClient';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
    title: 'Peskas™ - Open-source digital platform for small-scale fisheries',
    description: 'Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights. Built with co-design principles, it scales from landing-site monitoring to national dashboards across Asia and Africa.',
    openGraph: {
        title: 'Peskas™ - Open-source digital platform for small-scale fisheries',
        description: 'Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export default async function Home() {
    const allPosts = getAllPosts();
    // Get the 3 most recent posts
    const latestPosts = allPosts.slice(0, 3);
    
    return <HomePageClient latestPosts={latestPosts} />;
}
