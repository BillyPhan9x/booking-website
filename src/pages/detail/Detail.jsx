import Hotel from "../../components/hotel/Hotel";
import NavBar from "../../components/navbar/NavBar";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import hotelDetails from "../../data/detail.json";

import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <NavBar />
      <div className="detail-hotel">
        <div className="detail-container">
          <Hotel items={hotelDetails} />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Detail;
