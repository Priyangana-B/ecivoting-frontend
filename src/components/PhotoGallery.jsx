import React, { useState } from "react";
// import "../public/Media_Image/photogalleryimg1.jpg";
// import "../public/Media_Image/photogalleryimg2.jpg";
// import "../public/Media_Image/photogalleryimg3.jpg";
// import "../public/Media_Image/photogalleryimg4.jpg";
// import "../public/Media_Image/photogalleryimg5.jpg";
// import "../public/Media_Image/photogalleryimg6.jpg";
// import "../public/Media_Image/photogalleryimg7.jpg";
// import "../public/Media_Image/photogalleryimg8.jpg";
// import "../public/Media_Image/photogalleryimg9.jpg";
// import "../public/Media_Image/photogalleryimg10.jpg";
// import "../public/Media_Image/photogalleryimg11.jpg";
// import "../public/Media_Image/photogalleryimg12.jpg";
// import "../public/Media_Image/photogallerymainimg.jpg";
// import "../public/Media_Image/publication1-img.png";
// import "../public/Media_Image/publication2-img.png";


// ✅ Images with real captions
const images = [
  { src: "/Media_Image/photogalleryimg1.jpg", caption: "Inauguration Ceremony" },
  { src: "/Media_Image/photogalleryimg2.jpg", caption: "Press Conference 2024" },
  { src: "/Media_Image/photogalleryimg3.jpg", caption: "Community Engagement Drive" },
  { src: "/Media_Image/photogalleryimg4.jpg", caption: "Election Awareness Campaign" },
  { src: "/Media_Image/photogalleryimg5.jpg", caption: "Team Strategy Meeting" },
  { src: "/Media_Image/photogalleryimg6.jpg", caption: "Youth Voter Initiative" },
  { src: "/Media_Image/photogalleryimg7.jpg", caption: "Digital Voting Demo" },
  { src: "/Media_Image/photogalleryimg8.jpg", caption: "Polling Booth Setup" },
  { src: "/Media_Image/photogalleryimg9.jpg", caption: "Media Interaction Day" },
  { src: "/Media_Image/photogalleryimg10.jpg", caption: "Volunteer Appreciation Event" },
  { src: "/Media_Image/photogalleryimg11.jpg", caption: "Training Session for Staff" },
  { src: "/Media_Image/photogalleryimg12.jpg", caption: "Chief Election Officer Visit" },
];

export default function PhotoGallery() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: "2rem" }}>
      {/* ✅ Professional Header */}
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
        Photo Gallery
      </h1>

      {/* ✅ Main Image */}
      <div style={{ width: "100%", marginBottom: "2rem" }}>
        <img
          src={mainImage.src}
          alt="Main"
          style={{
            width: "100%",
            maxHeight: 500,
            objectFit: "cover",
            borderRadius: 12,
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        />
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
          {mainImage.caption}
        </p>
      </div>

      {/* ✅ Thumbnails */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 10,
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              border:
                img.src === mainImage.src ? "3px solid #007BFF" : "1px solid #ccc",
              transition: "transform 0.2s ease",
            }}
            onClick={() => setMainImage(img)}
          >
            <img
              src={img.src}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            {/* Hover Caption */}
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
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* CSS for Hover Effects */}
      <style>{`
        .hover-caption:hover {
          opacity: 1 !important;
        }
        div:hover > img {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}