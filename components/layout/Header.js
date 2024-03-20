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
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex display-6">PESKAS™</a>
                                </Link>
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
                                                    <li className="hr">
                                                        <span />
                                                    </li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="Malaysia Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Malaysia
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <li className="hr">
                                                        <span />
                                                    </li>
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
                                                <a>About</a>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="/assets/imgs/page/homepage1/story.svg" alt="story" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Our Story
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/under-costruction" legacyBehavior>
                                                        <a>
                                                            <img src="/assets/imgs/page/homepage1/how-works.svg" alt="story" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
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
