"use client";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-.9 1.5s-.9.8-1.5 1c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.3-1.2-.4-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.5s.9-.8 1.5-1c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.2 0 7 .1 5.8.2 4.9.3 4.1.6 3.2.9 2.5 1.3 1.8 2S.9 3.2.6 4.1c-.3.8-.4 1.7-.5 2.9C0 8.3 0 8.8 0 12c0 3.2 0 3.6.1 4.9.1 1.2.2 2.1.5 2.9.3.9.7 1.6 1.2 2.3.7.7 1.4 1.2 2.3 1.5.8.3 1.7.4 2.9.5 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2-.1 2.1-.2 2.9-.5.9-.3 1.6-.7 2.3-1.2.7-.7 1.2-1.4 1.5-2.3.3-.8.4-1.7.5-2.9.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.2-2.1-.5-2.9-.3-.9-.7-1.6-1.2-2.3s-1.4-1.2-2.3-1.5c-.8-.3-1.7-.4-2.9-.5C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.337v21.326C0 23.402.598 24 1.325 24H12.81V14.709H9.692V11.08h3.118V8.411c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.59l-.467 3.629h-3.123V24h6.116C23.402 24 24 23.402 24 22.674V1.337C24 .597 23.402 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Snapchat"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 0C6.648 0 3.992 3.893 3.992 8.078c0 2.292.513 4.13 1.305 5.608-.113.237-.296.61-.39.818-.487 1.063-1.26 2.378-.654 3.29.578.866 2.05.537 3.146.882.226.07.496.26.75.46.45.353.994.779 1.672.972.444.126.985.152 1.478.152.497 0 1.033-.027 1.474-.153.677-.194 1.221-.62 1.672-.973.254-.2.523-.39.75-.46 1.097-.344 2.568-.016 3.146-.882.606-.912-.168-2.227-.654-3.29-.094-.207-.277-.58-.39-.817.79-1.48 1.304-3.317 1.304-5.61C20.09 3.892 17.434 0 12.043 0h-.003z" />
            </svg>
          </a>

          <a
            href="mailto:contact@x0platform.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.065L0 6.75V18c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V6.75l-12 6.315zM12 10.935l12-6.315c0-1.104-.896-2-2-2H2c-1.104 0-2 .896-2 2l12 6.315z" />
            </svg>
          </a>
        </div>
        <div className="footer-map">
          <iframe
            src="https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        crafted with <span className="text-red-500 px-1">♥</span> at x0platform
        &copy; {year}
      </div>
    </div>
  );
};

export default Footer;
// This is a functional component for the footer of a Next.js application.
// It uses the 'use client' directive, indicating that it should be rendered on the client side.
// The component returns a footer element with two main sections: social media links and a tagline.
// The social media section includes links to various platforms: Instagram, Facebook, Snapchat, and email.
// Each link is represented as a paragraph element with the corresponding icon and text.
// The location section includes an embedded Google Maps iframe that shows a map of New York.
// The iframe is styled with a fixed width and height, and it allows for full-screen mode and lazy loading.
// The tagline section includes a message indicating that the footer was crafted with love at x0platform,
// along with the current year.
// The year is dynamically generated using JavaScript's Date object.
// The footer is styled with a class name "footer-section" and includes a heart icon to represent love.
// The footer is designed to provide contact information and a sense of connection with the audience.
// The footer is a common component in web applications, providing important information and links to users.
// The footer is designed to be responsive and user-friendly, providing easy access to different sections of the site.
// The footer is a common component in web applications, providing important information and links to users.
