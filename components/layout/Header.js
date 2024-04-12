/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    return (
        <>
            <header
                className={
                    scroll
                        ? `${headerStyle} header sticky-bar stick `
                        : `${headerStyle} header sticky-bar`
                }
            >
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo d-flex align-items-center text-decoration-none">
                                {/* Link for the PESKAS™ text leading to homepage */}
                                <Link href="/" legacyBehavior>
                                    <a className="header-text" style={{ fontSize: '2.75rem', marginRight: '10px' }}>PESKAS™</a>
                                </Link>
                                {/* Separate anchor for the logo leading to the external site */}
                                <a href="https://worldfishcenter.org/" target="_blank" rel="noopener noreferrer">
                                    {headerStyle
                                        ? <img alt="Logo" src="/assets/imgs/template/logo-white.svg" style={{ width: '27%', height: 'auto', verticalAlign: 'middle' }} />
                                        : <img alt="Logo" src="/assets/imgs/template/worldfish-vector-logo.svg" style={{ width: '27%', height: 'auto', verticalAlign: 'middle' }} />}
                                </a>
                            </div>

                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block text-end">
                                    <ul className="main-menu">
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior>
                                                <a>Countries</a>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" alt="Timor Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Timor-Leste
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="Malaysia Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Malaysia
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" alt="Kenyan Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Kenya
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Zanzibar.svg" alt="Zanzibar Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Zanzibar
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" alt="Zanzibar Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Mozambique
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" alt="Malawi Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Malawi
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="https://blog.peskas.org/" legacyBehavior>
                                                <a target="_blank" >
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior>
                                                <a> Resources </a>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/data-resource" legacyBehavior>
                                                        <a>
                                                            <img src="/assets/imgs/page/homepage1/data.svg" alt="Our Story" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Data
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior>
                                                <a>About</a>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="/assets/imgs/page/homepage1/story.svg" alt="Our Story" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Our Story
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="/assets/imgs/page/homepage1/how-works.svg" alt="How it works" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            How it works
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div
                                    className="burger-icon burger-icon-white d-xl-none"
                                    onClick={handleOpen}
                                >
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
