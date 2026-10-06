'use client'
import { useState } from 'react';
import RichText from '../content/RichText';

function RegionsSection({ regions, section }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeRegion = regions[activeIndex] || regions[0];

    return (
        <section className="section-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-1 col-12" />
                    <div className="col-lg-8 col-sm-10 col-12 text-center mt-50">
                        <h2 className="text-heading-1 color-gray-900">{section.title}</h2>
                        <RichText
                            content={section.subtitle}
                            className="text-body-lead-large color-gray-600 mt-20"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center mt-30">
                    <p className="text-heading-6 color-gray-900 mb-5">{section.wioPrompt}</p>
                    <a
                        href={section.wioHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-black icon-arrow-right-white"
                    >
                        {section.wioCta}
                    </a>
                </div>
            </div>
            <div className="container mt-40">
                <div className="text-center mt-30">
                    <ul className="nav" role="tablist">
                        {regions.map((region, index) => (
                            <li key={index} onClick={() => setActiveIndex(index)}>
                                <a
                                    className={
                                        activeIndex === index
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
                <div className="region-card mt-40">
                    <div>
                        <h3 className="text-heading-2 color-gray-900">{activeRegion.title}</h3>
                        <RichText
                            content={activeRegion.desc}
                            className="text-body-text color-gray-600 mt-12"
                        />
                        {activeRegion.ctaLabel && activeRegion.ctaHref ? (
                            <a
                                href={activeRegion.ctaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-black icon-arrow-right-white mt-15"
                            >
                                {activeRegion.ctaLabel}
                            </a>
                        ) : null}
                    </div>
                    <img className="region-card__image" src={activeRegion.image} alt={activeRegion.title} />
                </div>
            </div>
            <style jsx>{`
                .region-card {
                    display: grid;
                    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
                    gap: 40px;
                    align-items: center;
                    padding: 40px;
                    border-radius: 18px;
                    background: #f2f4f7;
                }
                .region-card__image {
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    object-fit: cover;
                    object-position: left top;
                    border-radius: 12px;
                    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
                }
                @media (max-width: 991px) {
                    .region-card {
                        grid-template-columns: 1fr;
                        gap: 24px;
                        padding: 20px;
                    }
                }
            `}</style>
        </section>
    );
}

export default RegionsSection;
