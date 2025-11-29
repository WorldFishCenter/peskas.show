/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/" className="d-flex display-6">
                                    PESKAS™
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <ul className="list-unstyled mt-20 mb-0">
                                <li className="text-body-text color-gray-600">
                                    <a href="mailto:peskas.platform@gmail.com" className="color-gray-600 text-decoration-none">
                                        peskas.platform@gmail.com
                                    </a>
                                </li>
                                <li className="text-body-text color-gray-600">
                                    <a href="mailto:a.tilley@cgiar.org" className="color-gray-600 text-decoration-none">
                                        a.tilley@cgiar.org
                                    </a>
                                </li>
                                <li className="text-body-text color-gray-600">
                                    <a href="mailto:l.longobardi@cgiar.org" className="color-gray-600 text-decoration-none">
                                        l.longobardi@cgiar.org
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/under-costruction">
                                        Mission and Vision
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/under-costruction">
                                        Our Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog">
                                        Our Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="under-costruction">
                                        Knowledge Base
                                    </Link>
                                </li>
                                <li>
                                    <Link href="under-costruction">
                                        News and Events
                                    </Link>
                                </li>
                                                                <li>
                                    <Link href="/under-costruction">
                                        Media
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/how-it-works">
                                        How it works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/under-costruction">
                                        Stories
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">PESKAS™ 2025</span>
                                {/* <Link href="/under-costruction" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/under-costruction" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link> */}
                            </div>
                            {/* <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;