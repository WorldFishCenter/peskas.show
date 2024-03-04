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
                                                    <Link href="/page-about-1" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-star" />
                                                            Timor-Leste
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-2" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-star" />
                                                            Kenya
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-3" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-star" />
                                                            Tanzania
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="https://blog.peskas.org/" legacyBehavior>
                                                <a>Blog</a>
                                            </Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior>
                                                <a>About</a>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-contact" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-paper-plane" />
                                                            Contact
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-signup" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-user-add" />
                                                            Sign Up
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-fingerprint" />
                                                            Log In
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-reset" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-settings" />
                                                            Reset Password
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/404" legacyBehavior>
                                                        <a>
                                                            <i className="fi fi-rr-exclamation" />
                                                            Error 404
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
