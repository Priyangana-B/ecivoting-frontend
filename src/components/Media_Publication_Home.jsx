import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MediaAndPublications from "../components/MediaAndPublications";
import "../components/SocialMediaSection.css";

const SocialMediaSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="social-media-section">
      <div className="container">
        <h2 className="section-title">ECI ON SOCIAL MEDIA</h2>

        <div className="social-grid">
          {/* Twitter Feed */}
          <div className="social-card">
            <h4>Tweets by SpokespersonECI</h4>
            <div className="tweet-embed">
              <a
                className="twitter-timeline"
                data-width="300"
                data-height="400"
                href="https://twitter.com/SpokespersonECI?ref_src=twsrc%5Etfw"
              >
                Tweets by SpokespersonECI
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-card social-media-links">
            <h4>Follow ECI</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/ECISVEEP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#3b5998"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.772-1.63 1.562v1.863h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/ECISVEEP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                {/* Twitter SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#1da1f2"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 4.92a4.52 4.52 0 001.4 6.03 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14 9.06 9.06 0 01-5.61 1.94A9.3 9.3 0 012 19.14a12.8 12.8 0 006.92 2.02c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.18 9.18 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ecisveep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                {/* Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#e1306c"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* YouTube Video + Description on Right */}
          <div className="social-card">
            <h4>A BLO from Manipur's Story</h4>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/WTcPEBSr-Dg?si=uDIu4_wDlKs5U-lN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p style={{ marginTop: "10px", fontSize: "0.95rem", color: "#333" }}>
              A BLO from Manipur shares her experience working at the grassroots
              during the election, highlighting challenges and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Media_Publications_Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <MediaAndPublications />
        <SocialMediaSection />
      </main>
    </>
  );
}
