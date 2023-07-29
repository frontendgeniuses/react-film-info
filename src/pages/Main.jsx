import React, { useState } from "react";
import FilmYear from "../components/FilmYear";
import FilmInfo from "../components/FilmInfo";
import { data } from "../helper/data";
import "../pages/Main.css";


const Main = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleYearClick = (film) => {
    setSelectedFilm(film);
   
  };

  return (
    <div className="body">
    

     
    <div className="container">
      <div className="card">
        <div className="film-list">
          <h1>Film List</h1>
          <div className="film-year">
          {data.map((film) => (
            <div key={film.id}>
              <FilmYear film={film} onYearClick={handleYearClick} selectedFilm={selectedFilm} />
              </div>
            
          ))}
          </div>
        </div>
        <div className="selected-film">
          <h1>Selected Film</h1>
          {selectedFilm && <FilmInfo film={selectedFilm} />}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Main;
