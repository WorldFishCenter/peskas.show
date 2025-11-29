function HeroSection({ onWatchVideo }) {
    return (
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
                            <div className="mt-40 d-flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    className="btn btn-black icon-arrow-right-white"
                                    onClick={onWatchVideo}
                                    aria-label="Open video modal to watch Peskas platform demonstration"
                                >
                                    Watch the video
                                </button>
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
                                aria-label="Peskas platform demonstration video"
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
                                <track kind="captions" srcLang="en" label="English captions" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

