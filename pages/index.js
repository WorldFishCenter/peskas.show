import Link from 'next/link';
import { useState } from 'react';
import PriceTable2 from '../components/elements/PriceTable2';
import Layout from '../components/layout/Layout';
import OfferSlider from '../components/slider/Offer';
import TestimonialSlider from '../components/slider/Testimonial';

function Home() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

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
                                        Advanced intelligent platform for
                                        <span className="color-green-900">
                                            {' '}
                                            small scale fisheries
                                        </span>
                                    </h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                        Peskas delivers real-time insights and sustainable solutions
                                        for small-scale fisheries, fostering growth and community
                                        resilience through data-driven decision-making.
                                        <br />
                                        <br />
                                        Harnessing simplicity and science, Peskas paves the way for
                                        thriving small-scale fisheries and healthier marine
                                        ecosystems.
                                    </p>
                                    <div className="mt-40">
                                        <Link href="/page-service-1" legacyBehavior>
                                            <a className="btn btn-black icon-arrow-right-white">
                                                Get Start
                                            </a>
                                        </Link>
                                        <Link href="/page-about-1" legacyBehavior>
                                            <a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                                Learn More
                                            </a>
                                        </Link>
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
                <div className="section-box overflow-visible mt-30">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-50">
                                <h2 className="text-heading-1 color-gray-900">
                                    Evolving within the lively 
                                    <br className="d-lg-block d-none" />
                                    landscapes of Asia and Africa
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                Peskas extends its reach across Africa and Asia, weaving a global network of sustainable small-scale fisheries bolstered by shared knowledge and collaborative technology.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center mt-50">
                            <ul className="nav" role="tablist">
                                <li onClick={() => handleOnClick(1)}>
                                    <Link href="/#tab-1" legacyBehavior>
                                        <a
                                            className={
                                                activeIndex === 1
                                                    ? 'btn btn-default btn-bd-green-hover btn-select active'
                                                    : 'btn btn-default btn-bd-green-hover btn-select'
                                            }
                                        >
                                            Timor-Leste
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(2)}>
                                    <Link href="/#tab-2" legacyBehavior>
                                        <a
                                            className={
                                                activeIndex === 2
                                                    ? 'btn btn-default btn-bd-green-hover btn-select active'
                                                    : 'btn btn-default btn-bd-green-hover btn-select'
                                            }
                                        >
                                            Kenya
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(3)}>
                                    <Link href="/#tab-3" legacyBehavior>
                                        <a
                                            className={
                                                activeIndex === 3
                                                    ? 'btn btn-default btn-bd-green-hover btn-select active'
                                                    : 'btn btn-default btn-bd-green-hover btn-select'
                                            }
                                        >
                                            Zanzibar
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(4)}>
                                    <Link href="/#tab-4" legacyBehavior>
                                        <a
                                            className={
                                                activeIndex === 4
                                                    ? 'btn btn-default btn-bd-green-hover btn-select active'
                                                    : 'btn btn-default btn-bd-green-hover btn-select'
                                            }
                                        >
                                            Mozambique
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div
                                className={
                                    activeIndex === 1
                                        ? 'tab-pane fade  active show'
                                        : 'tab-pane fade '
                                }
                            >
                                <div className="bg-2 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">Timor-Leste</h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Peskas in Timor-Leste was initiated in 2016 in
                                                    partnership with the Timor-Leste Ministry of
                                                    Agriculture and Fisheries and it is the official
                                                    fisheries national monitoring system of
                                                    Timor-Leste. The project leverages on a team of
                                                    Timorese enumerators collecting catch data from
                                                    fishers around Timor-Leste. These data are
                                                    matched with vessel tracking data to show
                                                    fishing trends over time and space.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior>
                                                        <a className="btn btn-default btn-white icon-arrow-right">
                                                            Learn more
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card-image">
                                                <a href="https://timor.peskas.org/" target="_blank">
                                                    <img
                                                        src="assets/imgs/page/homepage1/timor-leste.png"
                                                        alt="Timor-Leste"
                                                        class="bd-placeholder-img card-img-top card-image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    activeIndex === 2
                                        ? 'tab-pane fade  active show'
                                        : 'tab-pane fade '
                                }
                            >
                                <div className="bg-1 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Design Studios That Everyone Should Know
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior>
                                                        <a className="btn btn-default btn-white icon-arrow-right">
                                                            Learn more
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a
                                                    className="popup-youtube btn-play-video"
                                                    onClick={openModal}
                                                ></a>
                                                <img
                                                    className="img-responsive"
                                                    src="assets/imgs/page/homepage1/img-1-2.jpg"
                                                    alt="Agon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    activeIndex === 3
                                        ? 'tab-pane fade  active show'
                                        : 'tab-pane fade '
                                }
                            >
                                <div className="bg-3 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    We can blend colors multiple ways
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior>
                                                        <a className="btn btn-default btn-white icon-arrow-right">
                                                            Learn more
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a
                                                    className="popup-youtube btn-play-video"
                                                    onClick={openModal}
                                                ></a>
                                                <img
                                                    className="img-responsive"
                                                    src="assets/imgs/page/homepage1/img-1-3.jpg"
                                                    alt="Agon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    activeIndex === 4
                                        ? 'tab-pane fade  active show'
                                        : 'tab-pane fade '
                                }
                            >
                                <div className="bg-4 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Choose The Best Plan Thats For You
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior>
                                                        <a className="btn btn-default btn-white icon-arrow-right">
                                                            Learn more
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a
                                                    className="popup-youtube btn-play-video"
                                                    onClick={openModal}
                                                ></a>
                                                <img
                                                    className="img-responsive"
                                                    src="assets/imgs/page/homepage1/img-1-4.jpg"
                                                    alt="Agon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    activeIndex === 5
                                        ? 'tab-pane fade  active show'
                                        : 'tab-pane fade '
                                }
                            >
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Subscribe our newsletter to get gift
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior>
                                                        <a className="btn btn-default btn-white icon-arrow-right">
                                                            Learn more
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a
                                                    className="popup-youtube btn-play-video"
                                                    onClick={openModal}
                                                ></a>
                                                <img
                                                    className="img-responsive"
                                                    src="assets/imgs/page/homepage1/img-1-5.jpg"
                                                    alt="Agon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    activeIndex === 6
                                        ? 'tab-pane fade  active show'
                                        : 'tab-pane fade '
                                }
                            >
                                <div className="bg-6 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Ready to get started? Create and Account
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior>
                                                        <a className="btn btn-default btn-white icon-arrow-right">
                                                            Learn more
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a
                                                    className="popup-youtube btn-play-video"
                                                    onClick={openModal}
                                                ></a>
                                                <img
                                                    className="img-responsive"
                                                    src="assets/imgs/page/homepage1/img-1-6.jpg"
                                                    alt="Agon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">
                                    How Peskas™ works
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Interactively enhance fisheries management approaches through forward-thinking and innovative strategies.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/discover.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h5 className="text-heading-5 mt-20">1. Discovering Fisheries</h5>
                                    <p className="text-body-excerpt mt-20">
                                        We collect and integrate essential data on fishing activities to build a comprehensive picture of local fisheries.
                                    </p>
                                    <div className="mt-30">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/simplify.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">2. Simplifying Data</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Transforming complex fishing data into simple, clear insights for easy understanding and use.
                                    </p>
                                    <div className="mt-30">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/analytics.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">3. Insights for Action</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Analyzing data to uncover trends and patterns that inform sustainable fishing practices.
                                    </p>
                                    <div className="mt-30">
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/sharing.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                           <h3 className="text-heading-5 mt-20">4. Validation</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Analyzing data to uncover trends and patterns that inform sustainable fishing practices.
                                    </p>
                                    <div className="mt-30">
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/sharing.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">5. Reporting</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Analyzing data to uncover trends and patterns that inform sustainable fishing practices.
                                    </p>
                                    <div className="mt-30">
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/sharing.svg"
                                            alt="Agon"
                                        />
                                    </div>                             
                                    <h3 className="text-heading-5 mt-20">5. Feedback</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Making data accessible through an intuitive dashboard and comprehensive reports for informed decision-making.
                                    </p>
                                    <div className="mt-30">
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
                                    We believe that our works can contribute to a better world.
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    Necessary to deliver white glove, fully managed campaigns that
                                    surpass industry benchmarks.Take your career to next level.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Boost your sale
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Smart Installation Tools
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Introducing New Features
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Dynamic Boosting
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet hand-crafted templates.
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
                                    From Our blog and Event fanpage
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1" legacyBehavior>
                                    <a className="btn btn-black icon-arrow-right-white">
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
                                    <span className="tag-dot">Company</span>
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="text-heading-4">
                                            We can blend colors multiple ways, the most common
                                        </a>
                                    </Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior>
                                            <a>
                                                <img
                                                    src="/assets/imgs/page/homepage1/img-news-1.png"
                                                    alt="Agon"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="text-heading-4">
                                            How To Blow Through Capital At An Incredible Rate
                                        </a>
                                    </Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior>
                                            <a>
                                                <img
                                                    src="/assets/imgs/page/homepage1/img-news-2.png"
                                                    alt="Agon"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="text-heading-4">
                                            Design Studios That Everyone Should Know About?
                                        </a>
                                    </Link>
                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single" legacyBehavior>
                                            <a>
                                                <img
                                                    src="/assets/imgs/page/homepage1/img-news-3.png"
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
                                        src="https://www.youtube.com/embed/oRI37cOPBQQ"
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
            </Layout>
        </>
    );
}

export default Home;
