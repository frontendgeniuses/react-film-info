import React from 'react';

const FilmYear = ({ film, onYearClick, selectedFilm }) => {
  return (
    <p className= {film.date==selectedFilm?.date?"active":"" } onClick={() => onYearClick(film)} style={{ cursor: 'pointer' }}>
      {film.date}
    </p>
  );
};

export default FilmYear;

