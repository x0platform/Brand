"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeftSideMenu from "../components/LeftSideMenu";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="main-section">
        <div className="left-side">
          <LeftSideMenu />
        </div>
        <div className="hero-section">
          <Hero />
        </div>
      </div>
      <Footer />
    </>
  );
}

// This is a functional component for the home page of a Next.js application.
// It imports and uses several other components: Header, Footer, Hero, and LeftSideMenu.
// The component returns a JSX structure that includes the Header at the top,
// followed by a main content area that contains the LeftSideMenu and Hero components.
// Finally, it includes the Footer at the bottom.
// This structure allows for a consistent layout across the home page,
// with a header, main content area, and footer.
// The 'use client' directive indicates that this component is a client component,
// which means it can use React hooks and manage local state.
// The 'use client' directive is a special comment that indicates that this component should be rendered on the client side.
// This is useful for components that need to interact with the browser or manage local state.
