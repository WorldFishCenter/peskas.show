'use client'
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";

const steps = [
    {
        id: "01",
        title: "Field data capture",
        summary: "Enumerators collect trip, catch, and price information at landing sites using a standard survey form.",
        items: [
            "Species, weight, gear, crew, and effort recorded on mobile devices",
            "Landing location and trip timing georeferenced",
            "Data synced daily to a secure, versioned database",
        ],
    },
    {
        id: "02",
        title: "Vessel tracking",
        summary: "Solar GPS units log vessel positions to complement survey data with verified time at sea and fishing grounds.",
        items: [
            "Automatic polling creates continuous tracks",
            "Fishing activity inferred from speed and location",
            "Tracking data linked to trips for effort estimates",
        ],
    },
    {
        id: "03",
        title: "Ingestion and standardization",
        summary: "All inputs are cleaned, harmonized, and matched to reference tables before analysis.",
        items: [
            "Species names reconciled to FishBase and FAO codes",
            "Weights estimated from lengths when needed",
            "Currency, units, and categories normalized",
        ],
    },
    {
        id: "04",
        title: "Quality control",
        summary: "Automated rules and 21 quality flags check completeness, plausibility, and consistency.",
        items: [
            "Duplicates removed; outliers flagged for review",
            "Gear, location, and season cross-checks",
            "Audit trail for every accepted or corrected record",
        ],
    },
    {
        id: "05",
        title: "Analytics and indicators",
        summary: "Standard scripts calculate core metrics for fisheries management and nutrition.",
        items: [
            "Catch-per-unit-effort and production estimates by fleet, gear, and area",
            "Trends in value, prices, and revenue",
            "Nutritional contribution and species composition",
        ],
    },
    {
        id: "06",
        title: "Publication and feedback",
        summary: "Decision-ready outputs are shared with partners, with regular feedback into the field programme.",
        items: [
            "Public dashboards and downloadable datasets",
            "Briefings for government partners and communities",
            "Continuous refinement of forms, devices, and QA rules",
        ],
    },
];

const modules = [
    {
        title: "Data collection and tracking",
        icon: "/assets/imgs/page/homepage1/discover.svg",
        body: "Landing-site monitoring, onboard tracking, and fisher self-reporting combine to create a traceable effort-and-catch record.",
        items: [
            "Standardized digital catch monitoring for species, weight, gear, crew, and price",
            "GPS vessel tracking (solar and other devices) for routes, speed, and time at sea",
            "Tracks app for fisher-entered trips and catches, online or offline",
        ],
    },
    {
        title: "Data preprocessing",
        icon: "/assets/imgs/page/homepage1/simplify.svg",
        body: "Cleaning, harmonization, and versioned storage keep inputs analysis-ready across forms, fleets, and time.",
        items: [
            "Species names reconciled to FishBase and FAO codes",
            "Length–weight conversions and unit normalization",
            "Currency, gear, and effort categories aligned across surveys",
        ],
    },
    {
        title: "Analytics engine",
        icon: "/assets/imgs/page/homepage1/analytics.svg",
        body: "Scripted pipelines generate fisheries indicators using linked trip, tracking, and catch data.",
        items: [
            "Catch-per-unit-effort and production estimates by fleet, gear, and area",
            "Revenue and price trends, plus species composition and nutrition metrics",
            "Automated reruns so indicators stay current as new data arrive",
        ],
    },
    {
        title: "Quality assurance",
        icon: "/assets/imgs/page/homepage1/check.svg",
        body: "Real-time validation and audit trails ensure every record is trusted before publication.",
        items: [
            "21 automated quality flags with alerting and manual review flow",
            "Outlier detection for catch, effort, and location",
            "Enumerator and device performance tracking to target support",
        ],
    },
    {
        title: "Dashboards and decision tools",
        icon: "/assets/imgs/page/homepage1/report.svg",
        body: "Multilingual dashboards and briefs make data usable for managers, communities, and partners.",
        items: [
            "Interactive maps and time series, including regional views (e.g., Western Indian Ocean)",
            "Customizable visuals and automated briefings for meetings and reports",
            "Access controls by role so sensitive data stay protected",
        ],
    },
    {
        title: "Open publication",
        icon: "/assets/imgs/page/homepage1/users.svg",
        body: "Scheduled releases with documentation so others can verify and reuse the data responsibly.",
        items: [
            "Monthly exports to open repositories (e.g., Harvard Dataverse) when permitted",
            "Restructured datasets for dashboard integration and public download",
            "Clear data ownership: providers govern access; individual-level data stay private",
        ],
    },
];

const keyFeatures = [
    "Open-source code that adapts to different fisheries contexts",
    "User-friendly dashboards for spatial and temporal analysis",
    "Standardized data and terminology aligned with FAO and national protocols",
    "Cloud-hosted architecture for secure, near real-time access",
    "Co-designed workflows that build on existing systems and capacity",
];

const resourceLinks = [
    { label: "Main platform", href: "https://www.peskas.org" },
    { label: "Timor-Leste dashboard", href: "https://timor.peskas.org" },
    { label: "Western Indian Ocean dashboard", href: "https://coasts.peskas.org" },
    { label: "Tracks app demo", href: "https://tracks.peskas.org" },
    { label: "Data resources and publications", href: "https://peskas.org/data-resource" },
    { label: "Source code (GitHub)", href: "https://github.com/orgs/WorldFishCenter/repositories?q=peskas" },
];

const faqs = [
    {
        q: "Is Peskas the solar powered tracking device gadget thing?",
        a: "No. Peskas ingests any vessel location data. We have used solar trackers from Pelagic Data Systems, but any compatible GPS hardware can be integrated.",
    },
    {
        q: "What does Peskas cost?",
        a: "The software is free and open-source. WorldFish can support setup, form adaptation, training, and dashboards as a service.",
    },
    {
        q: "How much does vessel monitoring cost?",
        a: "Hardware and service vary by volume",
    },
    {
        q: "Can I access and use Peskas data?",
        a: "Data belong to the fishers and agencies who collect them. Summaries are published to the Harvard Dataverse; individual-level or sensitive vessel tracks are not shared.",
    },
    {
        q: "Can Peskas be customized for my country or project?",
        a: "Yes. The system is modular and adaptable. Technical documentation and support are available; contact a.tilley@cgiar.org or fill out the request form.",
    },
    {
        q: "Do you have manuals and online training modules?",
        a: "Most deployments are co-designed and trained in person to avoid misinterpretation. Online modules are in progress.",
    },
];

export default function HowItWorks() {
    const [activeModule, setActiveModule] = useState(modules[0].title);
    const [activeFaq, setActiveFaq] = useState(faqs[0].q);

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1 className="text-display-2 mt-30">How Peskas works</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-30" style={{ maxWidth: "720px" }}>
                                        Peskas turns daily catch records and vessel tracks into decision-ready indicators
                                        for small-scale fisheries - with open methods and clear quality control.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row text-center mb-50">
                            <div className="col-lg-10 mx-auto">
                                <h2 className="text-heading-1 color-gray-900">From landing site to insight</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    A single pipeline that starts with fishers and ends with trusted information for managers, scientists, and communities.
                                    Built in Timor-Leste, now powering implementations in East Africa and Southeast Asia.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="stage-card">
                                    <div className="stage-kicker">Collect</div>
                                    <h3 className="text-heading-4 mt-10">On-the-ground reporting</h3>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Enumerators capture standardized trip data and link it with GPS tracks so every record is traceable.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="stage-card">
                                    <div className="stage-kicker">Process</div>
                                    <h3 className="text-heading-4 mt-10">Automated, audited pipeline</h3>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Cleaning, harmonization, and quality flags ensure each dataset is consistent across time, fleets, and locations.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-30">
                                <div className="stage-card">
                                    <div className="stage-kicker">Share</div>
                                    <h3 className="text-heading-4 mt-10">Decision tools</h3>
                                    <p className="text-body-text color-gray-600 mt-15">
                                        Dashboards, briefs, and downloads translate the data into practical guidance for policy and daily operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto text-center mb-40">
                                <h3 className="text-heading-2 color-gray-900">The workflow</h3>
                                <p className="text-body-lead color-gray-600 mt-15">
                                    Each stage is repeatable, documented, and aligned with partner agencies so results remain credible over time.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-grid">
                            {steps.map((step) => (
                                <div className="timeline-card" key={step.id}>
                                    <div className="timeline-index">{step.id}</div>
                                    <div className="timeline-body">
                                        <h4 className="text-heading-4 color-gray-900">{step.title}</h4>
                                        <p className="text-body-text color-gray-600 mt-10">{step.summary}</p>
                                        <ul className="list-checked mt-15">
                                            {step.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto text-center mb-40">
                                <h3 className="text-heading-2 color-gray-900">Platform modules</h3>
                                <p className="text-body-lead color-gray-600 mt-15">
                                    The core components that keep the pipeline reliable, transparent, and reusable.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="accordion module-accordion" id="modules-accordion">
                                    {modules.map((item) => {
                                        const isOpen = activeModule === item.title;
                                        return (
                                            <div className="accordion-item" key={item.title}>
                                                <h2 className="accordion-header">
                                                    <button
                                                        className={
                                                            isOpen
                                                                ? "accordion-button text-heading-5"
                                                                : "accordion-button text-heading-5 collapsed"
                                                        }
                                                        type="button"
                                                        onClick={() => setActiveModule(isOpen ? "" : item.title)}
                                                    >
                                                        <span className="module-icon">
                                                            <img src={item.icon} alt={item.title} />
                                                        </span>
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    className={
                                                        isOpen
                                                            ? "accordion-collapse collapse show"
                                                            : "accordion-collapse collapse"
                                                    }
                                                >
                                                    <div className="accordion-body text-body-text color-gray-600">
                                                        <p className="mb-15">{item.body}</p>
                                                        <ul className="list-checked mt-10">
                                                            {item.items.map((point) => (
                                                                <li key={point}>{point}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-70 bg-gray-50">
                    <div className="container pt-60 pb-60">
                        <div className="row">
                            <div className="col-lg-6 mb-30">
                                <div className="info-card">
                                    <h3 className="text-heading-2 color-gray-900">Key features</h3>
                                    <ul className="list-checked mt-20">
                                        {keyFeatures.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="info-card">
                                    <h3 className="text-heading-2 color-gray-900">Resources and links</h3>
                                    <ul className="resource-list mt-20">
                                        {resourceLinks.map((link) => (
                                            <li key={link.href}>
                                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-10 bg-gray-50">
                    <div className="container pt-60 pb-60">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-2 color-gray-900">FAQ</h3>
                                <p className="text-body-lead color-gray-600 mt-15">Straight answers on hardware, costs, data, and customization.</p>
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-lg-10">
                                <div className="accordion module-accordion">
                                    {faqs.map((item) => {
                                        const isOpen = activeFaq === item.q;
                                        return (
                                            <div className="accordion-item" key={item.q}>
                                                <h2 className="accordion-header">
                                                    <button
                                                        className={
                                                            isOpen
                                                                ? "accordion-button text-heading-5"
                                                                : "accordion-button text-heading-5 collapsed"
                                                        }
                                                        type="button"
                                                        onClick={() => setActiveFaq(isOpen ? "" : item.q)}
                                                    >
                                                        {item.q}
                                                    </button>
                                                </h2>
                                                <div
                                                    className={
                                                        isOpen
                                                            ? "accordion-collapse collapse show"
                                                            : "accordion-collapse collapse"
                                                    }
                                                >
                                                    <div className="accordion-body text-body-text color-gray-600">
                                                        {item.a}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h3 className="text-heading-2 color-gray-900">Ready to see it in your waters?</h3>
                                <p className="text-body-lead color-gray-600 mt-15" style={{ maxWidth: "680px" }}>
                                    We co-design deployments with partners, train local teams, and keep the pipeline open so evidence stays current.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-40">
                            <div className="col-12">
                                <div className="airtable-embed-wrapper">
                                    <iframe
                                        title="Peskas instance request"
                                        className="airtable-embed"
                                        src="https://airtable.com/embed/appMMEJYlJdfSJEjm/pagDiqNCwLasUBKQi/form"
                                        frameBorder="0"
                                        style={{ width: '100%', minHeight: '700px', border: 0 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

            <style jsx>{`
                .stage-card {
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    padding: 24px;
                    height: 100%;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                }
                .stage-kicker {
                    display: inline-flex;
                    align-items: center;
                    padding: 6px 12px;
                    border-radius: 999px;
                    background: #f0fdf4;
                    color: #047857;
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: 0.2px;
                }
                .timeline-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
                @media (min-width: 992px) {
                    .timeline-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                .timeline-card {
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: 16px;
                    padding: 24px;
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                    align-items: start;
                }
                .timeline-index {
                    width: 64px;
                    height: 64px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f0fdf4;
                    color: #047857;
                    font-weight: 700;
                    font-size: 18px;
                }
                .list-checked {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .list-checked li {
                    position: relative;
                    padding-left: 26px;
                    margin-bottom: 10px;
                    color: #4b5563;
                }
                .list-checked li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 8px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #047857;
                }
                .module-accordion .accordion-item {
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                    margin-bottom: 12px;
                }
                .module-accordion .accordion-button {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 20px;
                }
                .module-accordion .accordion-button:focus {
                    box-shadow: none;
                }
                .module-accordion .accordion-body {
                    padding: 16px 20px 20px;
                }
                .module-icon {
                    width: 34px;
                    height: 34px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .module-icon img {
                    width: 28px;
                    height: 28px;
                }
                .resource-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .resource-list li {
                    margin-bottom: 12px;
                }
                .resource-list a {
                    color: #0f172a;
                    font-weight: 600;
                    text-decoration: none;
                }
                .resource-list a:hover {
                    text-decoration: underline;
                }
                .info-card {
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    padding: 24px;
                    height: 100%;
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
                }
                .airtable-embed-wrapper {
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #f9fafb;
                }
                @media (max-width: 767px) {
                    .timeline-card {
                        grid-template-columns: 56px 1fr;
                    }
                    .timeline-index {
                        width: 56px;
                        height: 56px;
                    }
                }
            `}</style>
        </>
    );
}
