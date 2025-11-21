import Link from 'next/link';
import { useState } from 'react';
import PriceTable2 from '../components/elements/PriceTable2';
import Layout from '../components/layout/Layout';
import OfferSlider from '../components/slider/Offer';
import TestimonialSlider from '../components/slider/Testimonial';
import CounterUp from "../components/elements/CounterUp";

function Home() {
    const regions = [
        {
            id: 1,
            title: "Timor-Leste",
            desc: "The flagship implementation of Peskas since 2016, officially adopted as the national fisheries monitoring system in 2019. In partnership with the Ministry of Agriculture and Fisheries, Peskas has collected over 59,000 fishing trips and 298 tonnes of catch data, enabling the first national fisheries production estimates and supporting evidence-based policy development for sustainable small-scale fisheries management.",
            cta: { label: "Open dashboard", href: "https://timor.peskas.org/" },
            image: "assets/imgs/page/homepage1/timor-dash.png",
        },
        {
            id: 2,
            title: "Malaysia",
            desc: "Peskas is being adapted for Malaysia's diverse coastal and marine fisheries systems. Building on lessons learned from Timor-Leste, the Malaysian implementation focuses on integrating with existing fisheries management frameworks while maintaining the platform's core open-source principles and user-centered design approach.",
            cta: null,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
        },
        {
            id: 3,
            title: "Kenya",
            desc: "Part of Peskas' East African expansion, the Kenya implementation focuses on coastal small-scale fisheries. Working with local communities and government partners, this initiative aims to improve fisheries data collection and management practices along Kenya's rich coastal waters, supporting both food security and sustainable livelihoods.",
            cta: { label: "Open dashboard", href: "https://digitalfisheries.kenya.peskas.org/en" },
            image: "assets/imgs/page/homepage1/kenya-dash.png",
        },
        {
            id: 4,
            title: "Zanzibar",
            desc: "Leveraging Zanzibar's strategic importance in Indian Ocean fisheries, Peskas is being adapted to support the island's vibrant fishing communities. The implementation emphasizes community-based resource management and the integration of traditional fishing knowledge with modern data collection techniques.",
            cta: { label: "Open dashboard", href: "https://zanzibar.peskas.org" },
            image: "assets/imgs/page/homepage1/zanzibar-dash.png",
        },
        {
            id: 5,
            title: "Mozambique",
            desc: "Mozambique's extensive coastline and significant small-scale fisheries sector make it a key location for Peskas expansion. The implementation focuses on supporting artisanal fishing communities while building local capacity for sustainable fisheries management and marine resource conservation.",
            cta: { label: "Open dashboard", href: "https://mozambique-portal.vercel.app/" },
            image: "assets/imgs/page/homepage1/mozambique-dash.png",
        },
        {
            id: 6,
            title: "Malawi",
            desc: "Extending Peskas to inland fisheries, Malawi represents an important expansion into freshwater aquatic food systems. The Lake Malawi implementation adapts the platform's methodologies for inland small-scale fisheries, addressing unique challenges of freshwater ecosystems and community-based fisheries management.",
            cta: { label: "Open dashboard", href: "https://malawi.peskas.org/" },
            image: "assets/imgs/page/homepage1/malawi-dash.png",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(1);
    const activeRegion = regions.find((r) => r.id === activeIndex) || regions[0];

    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
        setModal(!modal);
    };
    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-1">
                        <div className="container">
                            <div className="row" style={{ paddingBottom: 40 }}>
                                <div className="col-lg-7">
                                    <h1 className="text-display-3">
                                        Open-source digital platform for
                                        <span className="color-green-900">
                                            {' '}
                                            small-scale fisheries
                                        </span>
                                    </h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                        Peskas is an open-source, modular platform that turns fisheries data into
                                        decision-ready insights. Built with co-design principles, it scales from
                                        landing-site monitoring to national dashboards across Asia and Africa.
                                    </p>
                                    {/* <div className="mt-40 d-flex flex-wrap gap-3">
                                        <Link href="/how-it-works" legacyBehavior>
                                            <a className="btn btn-black icon-arrow-right-white">
                                                How it works
                                            </a>
                                        </Link>
                                    </div> */}
                                    <div className="mt-40 d-flex flex-wrap gap-3">
                                        <a
                                            className="btn btn-black icon-arrow-right-white"
                                            onClick={openModal}
                                        >
                                            Watch the video
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-5 d-none d-lg-block"
                                    style={{ position: 'relative' }}
                                >
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            objectFit: 'cover',
                                            borderRadius: 15,
                                        }}
                                    >
                                        <source
                                            src="assets/imgs/page/homepage1/TL_tracks.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                                {/* <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <video
                                            className="vid-responsive"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="assets/imgs/page/homepage1/TL_tracks.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={8} time={3} /></span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years of operation</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={6} time={3} /></span>
                                            <p className="text-body-text color-gray-500 pl-40">Countries active</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={59} time={3} />k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Fishing trips tracked</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={298} time={3} /></span>
                                            <p className="text-body-text color-gray-500 pl-40">Tonnes of catch recorded</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-50">
                                <h2 className="text-heading-1 color-gray-900">
                                    Transforming fisheries management
                                    <br className="d-lg-block d-none" />
                                    across Asia and Africa
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    From Timor-Leste to East Africa, Peskas helps partners collect, verify, and visualize
                                    small-scale fisheries data so communities and agencies can act on evidence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center mt-30">
                            <p className="text-heading-6 color-gray-900 mb-5">
                                Explore the Western Indian Ocean regional view
                            </p>
                            <a
                                href="https://coasts.peskas.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-black icon-arrow-right-white"
                            >
                                coasts.peskas.org
                            </a>
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="text-center mt-30">
                            <ul className="nav" role="tablist">
                                {regions.map((region) => (
                                    <li key={region.id} onClick={() => setActiveIndex(region.id)}>
                                        <a
                                            className={
                                                activeIndex === region.id
                                                    ? 'btn btn-default btn-bd-green-hover btn-select active'
                                                    : 'btn btn-default btn-bd-green-hover btn-select'
                                            }
                                        >
                                            {region.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="region-hero mt-40" style={{ backgroundImage: `linear-gradient(120deg, rgba(4, 7, 15, 0.7) 0%, rgba(4, 7, 15, 0.35) 50%, rgba(4, 7, 15, 0.15) 80%), url('${activeRegion.image}')` }}>
                            <div className="region-hero__content">
                                <div className="region-hero__text">
                                    <h3 className="text-heading-2 color-white">{activeRegion.title}</h3>
                                    <p className="text-body-lead color-white mt-12">{activeRegion.desc}</p>
                                    {activeRegion.cta ? (
                                        <a
                                            href={activeRegion.cta.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-black icon-arrow-right-white mt-15"
                                        >
                                            {activeRegion.cta.label}
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70 bg-gray-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h3 className="text-heading-2 color-gray-900">Bring Peskas to your fishery</h3>
                                <p className="text-body-lead color-gray-600 mt-15" style={{ maxWidth: "680px" }}>
                                    Tell us about your context and goals. We’ll respond with a tailored setup plan and timelines.
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-20 mt-lg-0">
                                <Link href="https://airtable.com/appMMEJYlJdfSJEjm/pagDiqNCwLasUBKQi/form" legacyBehavior>
                                    <a target="_blank" className="btn btn-black icon-arrow-right-white">Request Peskas</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12 mb-30">
                                <div className="card-grid-1 bg-1 bg-business hover-up">
                                    <h4 className="text-heading-4 mt-10">Open and modular</h4>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Open-source code, modular services, and clear standards so you can adapt Peskas to your fishery.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 mb-30">
                                <div className="card-grid-1 bg-1 bg-local hover-up">
                                    <h4 className="text-heading-4 mt-10">Built with partners</h4>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Co-designed workflows that layer onto existing systems and capacity instead of replacing them.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 mb-30">
                                <div className="card-grid-1 bg-1 bg-social hover-up">
                                    <h4 className="text-heading-4 mt-10">Secure and timely</h4>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Cloud-hosted pipelines with quality for near real-time access. Keep sensitive trip data protected.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 mb-30">
                                <div className="card-grid-1 bg-1 bg-social hover-up">
                                    <h4 className="text-heading-4 mt-10">From boats to dashboards</h4>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Standardized data and terminology ready for national, regional, and FAO-aligned reporting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="tracks-hero">
                            <div className="tracks-hero__bg" aria-hidden="true" />
                            <div className="tracks-hero__content">
                                <div className="tracks-hero__text">
                                    <h3 className="text-heading-2 color-white">
                                        Peskas Tracks: a digital window into small-scale fishing trips
                                    </h3>
                                    <p className="text-body-lead color-white mt-15 tracks-hero__lede">
                                        Built by WorldFish through the Asia-Africa BlueTech Superhighway, Peskas Tracks is a mobile and web app that fishers install to pair vessel tracking with their own catch reports, making movements, productivity, and safety visible in near real time.
                                    </p>
                                    <div className="tracks-grid mt-20">
                                        <div>
                                            <h4 className="text-heading-5 color-white">What fishers and managers see</h4>
                                            <ul className="list-checked mt-12 tracks-list">
                                                <li>Live and offline trip logging: position, route, speed, time at sea</li>
                                                <li>Trip heatmaps by day, week, or month with effort summaries</li>
                                                <li>Catch entries linked to trips for a full record of effort and catch</li>
                                                <li>Password-protected data per vessel; English, Portuguese, Swahili interfaces</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-heading-5 color-white">Pilots and impact</h4>
                                            <ul className="list-checked mt-12 tracks-list">
                                                <li>100+ fishers across Kenya, Tanzania, and Mozambique</li>
                                                <li>Heatmaps and stats help plan routes and fuel use</li>
                                                <li>When a vessel stalled, Tracks helped locate it quickly, boosting safety</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap gap-3 mt-25">
                                        <a
                                            href="https://tracks.peskas.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-black icon-arrow-right-white"
                                        >
                                            See the demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img
                                    className="bdrd-16 img-responsive"
                                    src="assets/imgs/page/homepage1/fishing.png"
                                    alt="Agon"
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-1 mt-30">
                                    Transforming small-scale fisheries through digital innovation.
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    Peskas bridges the data gap in small-scale fisheries, empowering
                                    communities and governments with evidence-based insights for sustainable
                                    resource management, improved livelihoods, and food security.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Evidence-Based Management
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Real-time data enables informed decisions for sustainable fisheries
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Community Empowerment
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Local enumerators and fishers become key stakeholders in data collection
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Open Science Principles
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Free, open-source platform ensuring accessibility and transparency
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Scalable Solutions
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Modular design adapts to diverse fisheries contexts and needs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">
                                    From Our Peskas™ blog
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="https://blog.peskas.org/" legacyBehavior>
                                    <a target="_blank" className="btn btn-black icon-arrow-right-white">
                                        View More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">January 16, 2024</span>
                                    <Link href="https://blog.peskas.org/posts/shorthands/" legacyBehavior>
                                        <a target="_blank" className="text-heading-4">
                                            A DAY WITH A SMALL-SCALE FISHING COMMUNITY AT KANAMAI BEACH, KENYA
                                        </a>
                                    </Link>
                                    <div className="grid-4-img">
                                        <Link href="https://blog.peskas.org/posts/shorthands/" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src="https://raw.githubusercontent.com/WorldFishCenter/peskas-blog/master/static/img/shorthands_cover.jpg"
                                                    alt="Agon"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">November 20, 2023</span>
                                    <Link href="https://blog.peskas.org/posts/world-fishers-day/" legacyBehavior>
                                        <a target="_blank" className="text-heading-4">
                                            WORLD FISHERIES DAY: CELEBRATING THE PEOPLE BEHIND THE NUMBERS
                                        </a>
                                    </Link>
                                    <div className="grid-4-img">
                                        <Link href="https://blog.peskas.org/posts/world-fishers-day/" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src="https://raw.githubusercontent.com/WorldFishCenter/peskas-blog/master/static/img/zanzibar_fishers_horizon.jpg"
                                                    alt="Agon"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">September 16, 2023</span>
                                    <Link href="https://blog.peskas.org/posts/africa-trip/" legacyBehavior>
                                        <a target="_blank" className="text-heading-4">
                                            FROM LITTLE THINGS, BIG THINGS GROW: SCALING PESKAS IN EAST AFRICA
                                        </a>
                                    </Link>
                                    <div className="grid-4-img">
                                        <Link href="https://blog.peskas.org/posts/africa-trip/" legacyBehavior>
                                            <a target="_blank" className="text-heading-4">
                                                <img
                                                    src="https://raw.githubusercontent.com/WorldFishCenter/peskas-blog/master/static/img/fish_market.jpg"
                                                    alt="Agon"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                            <div className="modal__content" modal={modal}>
                                <div className="modal__video-align">
                                    {videoLoading ? (
                                        <div className="modal__spinner">
                                            <i className="fi-rr-refresh"></i>
                                        </div>
                                    ) : null}
                                    <iframe
                                        className="modal__video-style"
                                        onLoad={spinner}
                                        loading="lazy"
                                        width="800"
                                        height="500"
                                        src="https://www.youtube.com/embed/962qilVnTZ0"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                <style jsx>{`
                    .tracks-hero {
                        position: relative;
                        border-radius: 18px;
                        overflow: hidden;
                        min-height: 520px;
                        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .tracks-hero__bg {
                        position: absolute;
                        inset: 0;
                        background-image: linear-gradient(90deg, rgba(4, 7, 15, 0.78) 0%, rgba(4, 7, 15, 0.5) 45%, rgba(4, 7, 15, 0.2) 70%), url('/assets/imgs/page/homepage1/tracksapp-map-screenshot.png');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        filter: saturate(1.05) brightness(0.95);
                        opacity: 0.9;
                    }
                    .tracks-hero__content {
                        position: relative;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        height: 100%;
                        padding: 32px;
                    }
                    .tracks-hero__text {
                        max-width: 760px;
                        position: relative;
                        padding: 16px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, rgba(8, 11, 18, 0.65), rgba(8, 11, 18, 0.35));
                        line-height: 1.6;
                    }
                    .tracks-hero__lede {
                        max-width: 720px;
                        line-height: 1.6;
                    }
                    .tracks-hero__text p {
                        line-height: 1.6;
                    }
                    .tracks-grid {
                        display: grid;
                        gap: 14px;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                    .tracks-list li {
                        color: #f5f5f5;
                    }
                    .tracks-list li::before {
                        background: #d1fae5;
                    }
                    .tracks-hero__text .btn.btn-black {
                        background: #ffffff;
                        color: #0f172a;
                        border: 1px solid rgba(255, 255, 255, 0.7);
                    }
                    .tracks-hero__text .btn.btn-black:hover {
                        background: #f3f4f6;
                    }
                    .region-hero {
                        position: relative;
                        border-radius: 18px;
                        overflow: hidden;
                        min-height: 460px;
                        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    .region-hero__content {
                        position: relative;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        min-height: 460px;
                        padding: 36px;
                    }
                    .region-hero__text {
                        max-width: 680px;
                        background: linear-gradient(135deg, rgba(8, 11, 18, 0.68), rgba(8, 11, 18, 0.4));
                        padding: 24px;
                        border-radius: 14px;
                        line-height: 1.6;
                    }
                    @media (max-width: 991px) {
                        .tracks-hero {
                            min-height: 0;
                        }
                        .tracks-hero__content {
                            padding: 24px;
                        }
                        .tracks-grid {
                            grid-template-columns: 1fr;
                        }
                        .region-hero__content {
                            min-height: 0;
                            padding: 20px;
                        }
                    }
                `}</style>
            </Layout>
        </>
    );
}

export default Home;
