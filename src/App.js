import React from "react";
import "./App.scss";
import MovieSearch from "./components/MovieSearch";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="main-container">
      <div className="page">
        <Header />
        <div className="content">
          <p>
            Discover movies by entering their titles. Simply type the title
            you're interested in and click 'search' to get started.
          </p>
        </div>
        <MovieSearch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
