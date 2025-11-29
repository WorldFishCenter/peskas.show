import Link from 'next/link';

function CTASection() {
    return (
        <section className="section-box mt-70 bg-gray-50">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h3 className="text-heading-2 color-gray-900">Bring Peskas to your fishery</h3>
                        <p className="text-body-lead color-gray-600 mt-15" style={{ maxWidth: "680px" }}>
                            Tell us about your context and goals. We&apos;ll respond with a tailored setup plan and timelines.
                        </p>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-20 mt-lg-0">
                        <a href="https://airtable.com/appMMEJYlJdfSJEjm/pagDiqNCwLasUBKQi/form" target="_blank" rel="noopener noreferrer" className="btn btn-black icon-arrow-right-white">Request Peskas</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;

