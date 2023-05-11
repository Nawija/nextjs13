"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex-center gap-2">
                <Image
                    src="/assets/images/logo.svg"
                    alt="Seovileo Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <p className="logo_text">Seovileo</p>
            </Link>

            {/* Mobile Navigation */}
            <div className="sm:flex hidden">

            </div>
        </nav>
    );
};

export default Nav;
