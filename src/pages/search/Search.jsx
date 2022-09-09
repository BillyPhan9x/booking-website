import React from "react";

import NavBar from "../../components/navbar/NavBar";
import SearchPopup from "../../components/searchpage/SearchPopup";
import SearchList from "../../components/searchpage/SearchList";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import "./Search.css";

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="search-wrap">
        <div className="search-container">
          <SearchPopup />
          <SearchList />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Search;

// Tái sử dụng các Component NavBar, Footer ở Home Page.

// Xây dựng, hiển thị danh sách trên trang Search Page với <Route path="/search" element={<Search/>}/>

// SearchPopup: Component để render phần popup nằm bên trái của Page.

// SearchList: Component để render các kết quả của việc tìm kiếm nằm ở bên phải của Page.
