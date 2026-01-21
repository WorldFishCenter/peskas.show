import HomePageClient from '@/components/sections/HomePageClient';
import { getAllPosts } from '@/lib/posts';
import { DEFAULT_METADATA, BLOG_CONFIG } from '@/lib/constants';

export const metadata = {
    ...DEFAULT_METADATA,
};

export default async function Home() {
    const allPosts = getAllPosts();
    // Get the most recent posts
    const latestPosts = allPosts.slice(0, BLOG_CONFIG.latestPostsCount);
    
    return <HomePageClient latestPosts={latestPosts} />;
}
