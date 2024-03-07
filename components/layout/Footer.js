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
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex display-6">
                                        PESKAS™
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="text-body-text color-gray-600">peskas.platform@gmail.com</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>Mission and Vision</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>Press and Media</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="https://blog.peskas.org/" legacyBehavior>
                                        <a target="_blank" >
                                            Our Blog
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="under-costruction" legacyBehavior>
                                        <a>Knowledge Base</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="under-costruction" legacyBehavior>
                                        <a>News and Events</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/under-costruction" legacyBehavior>
                                        <a>Stories</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">PESKAS™ 2024</span>
                                <Link href="/under-costruction" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/under-costruction" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
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
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;