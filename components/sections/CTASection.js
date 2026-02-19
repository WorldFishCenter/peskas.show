function CTASection({ data }) {
    const { title, subtitle, ctaLabel, ctaHref } = data;

    return (
        <section className="section-box mt-70 bg-gray-50">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h3 className="text-heading-2 color-gray-900">{title}</h3>
                        <p className="text-body-lead color-gray-600 mt-15" style={{ maxWidth: '680px' }}>
                            {subtitle}
                        </p>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-20 mt-lg-0">
                        <a
                            href={ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-black icon-arrow-right-white"
                        >
                            {ctaLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
