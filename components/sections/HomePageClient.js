'use client'
import { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import RegionsSection from '../sections/RegionsSection';
import CTASection from '../sections/CTASection';
import FeaturesSection from '../sections/FeaturesSection';
import TracksHeroSection from '../sections/TracksHeroSection';
import AboutSection from '../sections/AboutSection';
import BlogSection from '../sections/BlogSection';
import VideoModal from '../sections/VideoModal';
import Layout from '../layout/Layout';

export default function HomePageClient({ latestPosts }) {
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
    );
}
