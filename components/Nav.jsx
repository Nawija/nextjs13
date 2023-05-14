"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);


    return (
        <nav className="flex-between w-full mb-8 lg:mb-12 pt-3">
            <Link href="/" className="flex-center gap-2">
                <Image
                    src="/assets/images/logo.svg"
                    alt="Seovileo Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <p className="font-satoshi font-semibold text-lg text-gray-700 -tracking-wide">
                    Seovileo
                </p>
            </Link>
            <button
                aria-label="Menu"
                onClick={handleMenu}
                className="group lg:hidden bg-gray-100 shadow-md p-2.5 transition-colors duration-200 z-50 rounded-lg"
            >
                <div
                    className={
                        !showMenu
                            ? "w-5 h-1 transition-all duration-200 bg-gray-600 m-1 rounded-lg"
                            : "w-5 h-1 transition-all duration-200 bg-gray-600 m-1 translate-y-2 rotate-45 rounded-lg"
                    }
                />
                <div
                    className={
                        !showMenu
                            ? "w-3 h-1 transition-all duration-200 bg-gray-600 m-1 rounded-lg"
                            : "w-3 h-1 transition-all duration-200 bg-gray-600 m-1 opacity-0"
                    }
                />
                <div
                    className={
                        !showMenu
                            ? "w-5 h-1 transition-all duration-200 bg-gray-600 m-1 rounded-lg"
                            : "w-5 h-1 transition-all duration-200 bg-gray-600 m-1 -translate-y-2 -rotate-45 rounded-lg"
                    }
                />
            </button>
            <ul
                className={
                    !showMenu
                        ? "absolute transition-all -translate-y-full duration-200 inset-0 w-full h-full opacity-0 flex-center flex-col space-y-5"
                        : "absolute transition-transform translate-y-0 duration-200 inset-0 w-full h-full opacity-100 bg-gray-200 flex-center flex-col space-y-5"
                }
            >
                <li>Home</li>
                <li>Usługi</li>
                <li>Porjekty</li>
                <li>Porjekty</li>
                <li>Porjekty</li>
                <li>Kontakt</li>
                <li>Darmowa Wycena</li>
            </ul>
        </nav>
    );
};

export default Nav;
