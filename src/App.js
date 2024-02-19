import React from "react";
import "./App.scss";
import MovieSearch from "./components/MovieSearch";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <p>
          Aplicação para buscar o filmes. Para buscar, insira o título do filme
          desejado em clique em buscar.
        </p>
      </div>
      <MovieSearch />
      <Footer />
    </div>
  );
}

export default App;
