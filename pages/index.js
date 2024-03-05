import Link from 'next/link';
import { useState } from 'react';
import PriceTable2 from '../components/elements/PriceTable2';
import Layout from '../components/layout/Layout';
import OfferSlider from '../components/slider/Offer';
import TestimonialSlider from '../components/slider/Testimonial';
import CounterUp from "../components/elements/CounterUp";

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
                                        <Link href="/page-login" legacyBehavior>
                                            <a className="btn btn-black icon-arrow-right-white">
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
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={6} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years of activity</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={14} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">Partners</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={26} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Countries / Offices</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={24} time={3}/>k</span>
                                            <p className="text-body-text color-gray-500 pl-40">People involved</p>
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
                                    Evolving within the lively
                                    <br className="d-lg-block d-none" />
                                    landscapes of Asia and Africa
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Peskas extends its reach across Africa and Asia, weaving a
                                    global network of sustainable small-scale fisheries bolstered by
                                    shared knowledge and collaborative technology.
                                </p>
                            </div>
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
                                <div className="bg-5 panel-box mt-50">
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
                                                        className="bd-placeholder-img card-img-top card-image"
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
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Kenya
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
                                            <div className="card-image">
                                                <a href="/#" target="_blank">
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg"
                                                        alt="kenya"
                                                        className="bd-placeholder-img card-img-top card-image"
                                                    />
                                                </a>
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
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Zanzibar
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
                                            <div className="card-image">
                                                <a href="/#" target="_blank">
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Zanzibar.svg"
                                                        alt="zanzibar"
                                                        className="bd-placeholder-img card-img-top card-image"
                                                    />
                                                </a>
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
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Mozambique
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
                                            <div className="card-image">
                                                <a href="/#" target="_blank">
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg"
                                                        alt="mozambique"
                                                        className="bd-placeholder-img card-img-top card-image"
                                                    />
                                                </a>
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
                                <h2 className="text-heading-1 color-gray-900">How Peskas™ works</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Interactively enhance fisheries management approaches through
                                    forward-thinking and innovative strategies. Peskas consists of six main modules:
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 card-homepage card-link">
                                <Link href="/page-service-1" legacyBehavior>
                                    <div className="card-grid-1 bg-1 bg-business hover-up">
                                        <div className="grid-1-img">
                                            <img
                                                src="/assets/imgs/page/homepage1/discover.svg"
                                                alt="Agon"
                                            />
                                        </div>
                                        <h5 className="text-heading-5 mt-20">
                                            1. Discovering Fisheries
                                        </h5>
                                        <p className="text-body-excerpt mt-20">
                                            Collect key fishing data using intuitive tools for a
                                            comprehensive view of fisheries. This ensures accurate
                                            capture of efforts and aligns with stakeholders' objectives.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-sm-12 card-homepage">
                                <div className="card-grid-1 bg-1 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/simplify.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">2. Simplifying Data</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Streamlining complex fisheries data into intuitive,
                                        standardized formats for immediate access and practical application,
                                        while ensuring compatibility and alignment with established data ontologies.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 card-homepage">
                                <div className="card-grid-1 bg-1 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/analytics.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">3. Analytics</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Analyzing data to uncover trends and patterns that
                                        inform sustainable fishing practices, integrating
                                        local knowledge and context-specific insights to bolster fishery management.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 card-homepage">
                                <div className="card-grid-1 bg-1 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/check.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">4. Data Validation</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Ensuring accurate and reliable data, this module
                                        rigorously scrutinizes and refines the information,
                                        utilizing robust methods to identify and correct discrepancies.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 card-homepage">
                                <div className="card-grid-1 bg-1 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/report.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">5. Reporting and Visualization</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Translating complex data into interactive dashboards and detailed reports,
                                        this module promotes understanding and data-driven decisions,
                                         making sustainable fishing insights widely accessible.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 card-homepage">
                                <div className="card-grid-1 bg-1 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img
                                            src="/assets/imgs/page/homepage1/users.svg"
                                            alt="Agon"
                                        />
                                    </div>
                                    <h3 className="text-heading-5 mt-20">6. Feedback</h3>
                                    <p className="text-body-excerpt mt-20">
                                        Enabling active participation platforms, ensuring stakeholders'
                                        insights continually shape and improve the process, promoting
                                        a shared journey towards sustainable fisheries.
                                    </p>
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
