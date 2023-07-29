// src/components/FilmInfo.jsx

import React from 'react'

const FilmInfo = ({film}) => {
  return (
    <div>
      <h2>{film.title}</h2>
      <span>{film.body}</span>
      <p>Tags: {film.tags.join("/ ")}</p>
      <p>Rate: {film.rate}</p>
    </div>
  )
}

export default FilmInfo
