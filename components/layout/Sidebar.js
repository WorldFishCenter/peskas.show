import React, { useState } from 'react';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [activeMenu, setActiveMenu] = useState('');

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? '' : menuName);
    };

    return (
        <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
            <PerfectScrollbar className="mobile-header-wrapper-inner">
                <div className="mobile-header-content-area">
                    <div className="mobile-menu-wrap mobile-header-border">
                        <nav>
                            <ul className="mobile-menu font-heading">
                                <li className={activeMenu === 'countries' ? 'has-children active' : 'has-children'}>
                                    <span onClick={() => toggleMenu('countries')} className="menu-expand">
                                        <i className="fi-rr-angle-small-down"></i>
                                    </span>
                                    <a>Countries</a>
                                    <ul className={activeMenu === 'countries' ? 'sub-menu d-block' : 'sub-menu d-none'}>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" alt="Timor Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Timor-Leste
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="Malaysia Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Malaysia
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" alt="Kenya Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Kenya
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Zanzibar.svg" alt="Zanzibar Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Zanzibar
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" alt="Mozambique Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Mozambique
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" alt="Malawi Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Malawi
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeMenu === 'blog' ? 'has-children active' : 'has-children'}>
                                    <Link href="https://blog.peskas.org/" legacyBehavior><a target="_blank" rel="noopener noreferrer">Blog</a></Link>
                                </li>
                                <li className={activeMenu === 'resources' ? 'has-children active' : 'has-children'}>
                                    <span onClick={() => toggleMenu('resources')} className="menu-expand">
                                        <i className="fi-rr-angle-small-down"></i>
                                    </span>
                                    <a>Resources</a>
                                    <ul className={activeMenu === 'resources' ? 'sub-menu d-block' : 'sub-menu d-none'}>
                                        <li>
                                            <Link href="/data-resource" legacyBehavior>
                                                <a>
                                                    <img src="/assets/imgs/page/homepage1/data.svg" alt="Publications and Data" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Publications and Data
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeMenu === 'about' ? 'has-children active' : 'has-children'}>
                                    <span onClick={() => toggleMenu('about')} className="menu-expand">
                                        <i className="fi-rr-angle-small-down"></i>
                                    </span>
                                    <a>About</a>
                                    <ul className={activeMenu === 'about' ? 'sub-menu d-block' : 'sub-menu d-none'}>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="/assets/imgs/page/homepage1/story.svg" alt="Our Story" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    Our Story
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/under-construction" legacyBehavior>
                                                <a>
                                                    <img src="/assets/imgs/page/homepage1/how-works.svg" alt="How it Works" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                    How it Works
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </PerfectScrollbar>
        </div>
    );
};

export default Sidebar;
