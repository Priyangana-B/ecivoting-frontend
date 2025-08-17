import React, { useState } from "react";
const videos = [
  { id: 1, title: "Press Conference: General Election Schedule", embedUrl: "https://www.youtube.com/embed/V7I9aPYHBJc" },
  { id: 2, title: "ECI Unveils World's Largest Electoral Dataset", embedUrl: "https://www.youtube.com/embed/JzZhBhl8fv0" },
  { id: 3, title: "Fact‑Check: Electoral Misinformation", embedUrl: "https://www.youtube.com/embed/z7P3xHpmohk" },
  { id: 4, title: "National Voters' Day Message", embedUrl: "https://www.youtube.com/embed/jdWoG0j-3Xk" },
  { id: 5, title: "Rahul Gandhi Accuses ECI — Protest Coverage", embedUrl: "https://www.youtube.com/embed/vwijxwcXlK8" },
  { id: 6, title: "EC Holds Press Briefing on Schedule Announcement", embedUrl: "https://www.youtube.com/embed/V7I9aPYHBJc" },
  { id: 7, title: "SC Seeks ECI Response on Voter List Dare Issue", embedUrl: "https://www.youtube.com/embed/gkgowFz9Oyk" },
  { id: 8, title: "ECI Questions Tejashwi Yadav on Duplicate EPIC", embedUrl: "https://www.youtube.com/embed/SQXuRXrbhC0" },
  { id: 9, title: "Rahul Gandhi Denounces ECI Over Fraud Allegations", embedUrl: "https://www.youtube.com/embed/qtcn0lhB7co" },
  { id: 10, title: "Bihar Voters in TN? ECI Fact‑Checks Claims", embedUrl: "https://www.youtube.com/embed/z7P3xHpmohk" },
  { id: 11, title: "Election Commission: Formation & Powers Explained", embedUrl: "https://www.youtube.com/embed/SDFkL23_P9s" },
  { id: 12, title: "Introduction to Election Commission of India", embedUrl: "https://www.youtube.com/embed/arvkllhTSQ4" },
];



export default function VideoGallery() {
  const [mainVideo, setMainVideo] = useState(videos[0]);

  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: "2rem" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "600",
          marginBottom: "2rem",
          color: "#2c3e50",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "3px solid #007BFF",
          display: "inline-block",
        }}
      >
        Video Gallery
      </h1>

      {/* Main Video */}
      <div style={{ width: "100%", marginBottom: "2rem" }}>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={mainVideo.embedUrl}
            title={mainVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 12,
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          />
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "1.25rem",
            fontWeight: "500",
            fontStyle: "italic",
            color: "#34495e",
            borderLeft: "4px solid #007BFF",
            paddingLeft: "10px",
            display: "inline-block",
          }}
        >
          {mainVideo.title}
        </p>
      </div>

      {/* Thumbnails */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setMainVideo(video)}
            style={{
              position: "relative",
              borderRadius: 10,
              overflow: "hidden",
              cursor: "pointer",
              border: video.id === mainVideo.id ? "3px solid #007BFF" : "1px solid #ccc",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <iframe
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              style={{ width: "100%", height: 160, pointerEvents: "none" }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.65)",
                color: "#fff",
                textAlign: "center",
                padding: "0.5rem",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              className="hover-caption"
            >
              {video.title}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-caption:hover {
          opacity: 1 !important;
        }
        div:hover > iframe {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
