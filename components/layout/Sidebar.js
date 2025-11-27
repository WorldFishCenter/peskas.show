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
                                        <li>
                                            <Link href="/how-it-works" legacyBehavior>
                                                <a>
                                                    <i className="fi-rr-settings-sliders" style={{ marginRight: 6, opacity: 1, color: 'inherit' }}></i>
                                                    How it works
                                                </a>
                                            </Link>
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
                                                <a>
                                                    <i className="fi-rr-globe" style={{ marginRight: 6, opacity: 1, color: 'inherit' }}></i>
                                                    Countries
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    isActive.key == 3
                                                        ? 'sub-menu d-block'
                                                        : 'sub-menu d-none'
                                                }
                                            >
                                                <li>
                                                    <Link href="https://timor.peskas.org/" legacyBehavior>
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
                                                <li className="hr">
                                                    <span />
                                                </li>
                                                <li>
                                                    <Link href="https://digitalfisheries.kenya.peskas.org/en" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" alt="Kenyan Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Kenya
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://zanzibar.peskas.org" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Zanzibar.svg" alt="Zanzibar Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Zanzibar
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://mozambique-portal.vercel.app/" legacyBehavior>
                                                        <a>
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" alt="Mozambique Flag" style={{ width: '20px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                                                            Mozambique
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://malawi.peskas.org/" legacyBehavior>
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
                                                    <i className="fi-rr-book" style={{ marginRight: 6, opacity: 1, color: 'inherit' }}></i>
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                isActive.key == 4
                                                    ? 'has-children active'
                                                    : 'has-children'
                                            }
                                        >
                                            <span
                                                onClick={() => handleToggle(4)}
                                                className="menu-expand"
                                            >
                                                <i className="fi-rr-angle-small-down"></i>
                                            </span>
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <i className="fi-rr-folder" style={{ marginRight: 6, opacity: 1, color: 'inherit' }}></i>
                                                    Resources
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
                                                    <Link href="/data-resources" legacyBehavior>
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/page/homepage1/data.svg"
                                                                alt="data"
                                                                style={{
                                                                    width: '20px',
                                                                    height: 'auto',
                                                                    marginRight: '5px',
                                                                    verticalAlign: 'middle',
                                                                }}
                                                            />
                                                            Publications and data
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
