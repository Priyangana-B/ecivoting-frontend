import React from "react";
import "..assets/css/media/SocialMediaSection.css";

const SocialMediaSection = () => (
  <section className="social-media-section">
    <div className="container">
      <h2 className="section-title">ECI ON SOCIAL MEDIA</h2>
      <div className="social-grid">
        {/* Twitter Card */}
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

        {/* Empty Placeholder */}
        <div className="social-card-empty"></div>

        {/* YouTube Video Card */}
        <div className="social-card">
          <iframe
            width="300"
            height="400"
            src="https://www.youtube.com/embed/fUCGGJtkFkU"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default SocialMediaSection;
