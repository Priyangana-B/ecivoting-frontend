import React from "react";
import "../assets/css/Home.css";

// Import icons from assets/icons
import electorsIcon from "../assets/icons/electors.png";
import partiesIcon from "../assets/icons/candidates.png";
import electionMgmtIcon from "../assets/icons/electionmanagement.png";
import mediaIcon from "../assets/icons/media.png";
import educationIcon from "../assets/icons/education.png";

// Import images for slideshow
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
import img5 from "../assets/images/image5.jpg";


// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home() {
  return (
    <div className="front-container">
      
      {/* Slideshow */}
      <div className="front-container">
      {/* ✅ Slideshow Section */}
      <div className="slideshow">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <img src={img1} alt="Slide 1" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Slide 2" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Slide 3" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Slide 4" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Slide 5" className="slide-img" />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>


      {/* Voter & Candidate Section */}
      <div className="voter-section">
        <h2>Voter & Candidate Section</h2>
        <div className="voter-icons">
          <div className="icon-box">
            <img src={electorsIcon} alt="Electors" />
            <a href="/Electors_Home"><p>Electors</p></a>
          </div>
          <div className="icon-box">
            <img src={partiesIcon} alt="Political Parties" />
            <a href="/Political_Parties_Candidates_Home"><p>Political Parties/Candidates</p></a>
          </div>
          <div className="icon-box">
            <img src={electionMgmtIcon} alt="Election Management" />
            <a href="/Vote_Home"><p>Election Management</p></a>
          </div>
          <div className="icon-box">
            <img src={mediaIcon} alt="Media & Publication" />
            <a href="/Media_Publication_Home"><p>Media & Publication</p></a>
          </div>
          <div className="icon-box">
            <img src={educationIcon} alt="Voter Education" />
            <a href="/Voter_Education"><p>Voter Education</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
