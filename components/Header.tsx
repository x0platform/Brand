"use client";

import Link from "next/link";
import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="menu">
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="brand">x0platform</div>
    </header>
  );
};

export default Header;

// This is a functional component for the header of a Next.js application.
// It uses the 'use client' directive, indicating that it should be rendered on the client side.
// The component returns a header element with a title and a navigation menu.
// The header includes a link to the home page ("/") with the text "x0platform",
// and a navigation menu with links to various sections of the site: "Features", "Pricing", "FAQ", and "Contact".
// The links are created using the Link component from Next.js, which enables client-side navigation.
// The header is styled with padding, a bottom border, and a shadow effect to create a visually appealing layout.
// The header is designed to be responsive and user-friendly, providing easy access to different sections of the site.
// The header is a common component in web applications, providing a consistent navigation experience across different pages.
