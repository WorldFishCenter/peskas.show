/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: '',
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div
                className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
            >
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li
                                            className={
                                                isActive.key == 1
                                                    ? 'has-children active'
                                                    : 'has-children'
                                            }
                                        >
                                            <span
                                                onClick={() => handleToggle(1)}
                                                className="menu-expand"
                                            >
                                            </span>
                                        </li>
                                        <li
                                            className={
                                                isActive.key == 2
                                                    ? 'has-children active'
                                                    : 'has-children'
                                            }
                                        >
                                            <span
                                                onClick={() => handleToggle(2)}
                                                className="menu-expand"
                                            >
                                            </span>
                                        </li>
                                        <li
                                            className={
                                                isActive.key == 3
                                                    ? 'has-children active'
                                                    : 'has-children'
                                            }
                                        >
                                            <span
                                                onClick={() => handleToggle(3)}
                                                className="menu-expand"
                                            >
                                                <i className="fi-rr-angle-small-down"></i>
                                            </span>
                                            <Link href="#" legacyBehavior>
                                                <a>Countries</a>
                                            </Link>
                                            <ul
                                                className={
                                                    isActive.key == 3
                                                        ? 'sub-menu d-block'
                                                        : 'sub-menu d-none'
                                                }
                                            >
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
                                                <li>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className={
                                                isActive.key == 4
                                                    ? 'has-children active'
                                                    : 'has-children'
                                            }
                                        >
                                            <Link href="https://blog.peskas.org/" legacyBehavior>
                                                <a target="_blank" >
                                                    Blog
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    isActive.key == 4
                                                        ? 'sub-menu d-block'
                                                        : 'sub-menu d-none'
                                                }
                                            >
                                                <li>
                                                    <Link href="/page-contact" legacyBehavior>
                                                        <a>Contact</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-signup" legacyBehavior>
                                                        <a>Sign Up</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login" legacyBehavior>
                                                        <a>Log In</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-reset" legacyBehavior>
                                                        <a>Reset Password</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/404" legacyBehavior>
                                                        <a>Error 404</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className={
                                                isActive.key == 6
                                                    ? 'has-children active'
                                                    : 'has-children'
                                            }
                                        >
                                            <span
                                                onClick={() => handleToggle(6)}
                                                className="menu-expand"
                                            >
                                                <i className="fi-rr-angle-small-down"></i>
                                            </span>
                                            <Link href="#" legacyBehavior>
                                                <a>About</a>
                                            </Link>
                                            <ul
                                                className={
                                                    isActive.key == 6
                                                        ? 'sub-menu d-block'
                                                        : 'sub-menu d-none'
                                                }
                                            >
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
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    );
};

export default Sidebar;
