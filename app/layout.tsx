import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">{children}</div>
      </body>
    </html>
  );
}
// This is a root layout component for a Next.js application.
// It defines the structure of the HTML document, including the language attribute and the body content.
// The layout wraps the children components in a div with the class "app-layout".
// The layout also imports global CSS styles from a file named 'globals.css'.
// This allows for consistent styling across the entire application.
// The layout is used to provide a consistent structure and styling for all pages in the Next.js application.
