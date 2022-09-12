import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";

import City from "../../components/feature/City";
import Type from "../../components/feature/Type";
import Hotels from "../../components/feature/Hotels";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import "./Home.css";

// Tạo giao diện cho phần HomePage
// Sau khi đã tạo được Component, thêm Component Navbar, Header, City, Type, Hotels, Contact, Footer vào Home.jsx để có thể hiển thị ra khi người dùng truy cập vào trang chủ.
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <div className="home-container">
        <City />
        <h1 className="home-title">Browse by property type</h1>
        <Type />
        <h1 className="home-title">Homes guests love</h1>
        <Hotels />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
