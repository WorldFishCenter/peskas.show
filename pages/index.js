import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import RegionsSection from '../components/sections/RegionsSection';
import CTASection from '../components/sections/CTASection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TracksHeroSection from '../components/sections/TracksHeroSection';
import AboutSection from '../components/sections/AboutSection';
import BlogSection from '../components/sections/BlogSection';
import VideoModal from '../components/sections/VideoModal';
import { getAllPosts } from '../lib/posts';

function Home({ latestPosts }) {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    
    const openModal = () => {
        setModal(!modal);
    };
    
    const closeModal = () => {
        setModal(false);
    };
    
    const onVideoLoad = () => {
        setVideoLoading(false);
    };

    return (
        <>
            <Head>
                <title>Peskas™ - Open-source digital platform for small-scale fisheries</title>
                <meta name="description" content="Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights. Built with co-design principles, it scales from landing-site monitoring to national dashboards across Asia and Africa." />
                <meta property="og:title" content="Peskas™ - Open-source digital platform for small-scale fisheries" />
                <meta property="og:description" content="Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Layout>
                <HeroSection onWatchVideo={openModal} />
                <StatsSection />
                <RegionsSection />
                <CTASection />
                <FeaturesSection />
                <TracksHeroSection />
                <AboutSection />
                <BlogSection latestPosts={latestPosts} />
                <VideoModal 
                    isOpen={modal} 
                    onClose={closeModal} 
                    videoLoading={videoLoading}
                    onVideoLoad={onVideoLoad}
                />
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts();
    // Get the 3 most recent posts (already sorted by date descending)
    const latestPosts = allPosts.slice(0, 3);
    
    return {
        props: {
            latestPosts,
        },
    };
}

export default Home;
