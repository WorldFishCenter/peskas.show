function AboutSection() {
    return (
        <section className="section-box">
            <div className="container mt-100">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 block-img-we-do">
                        <img
                            className="bdrd-16 img-responsive"
                            src="assets/imgs/page/homepage1/fishing.png"
                            alt="Small-scale fisheries"
                            width={764}
                            height={885}
                            loading="lazy"
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
    );
}

export default AboutSection;

