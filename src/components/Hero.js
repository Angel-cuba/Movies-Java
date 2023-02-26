import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function Hero({movies}) {
  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {movies?.map((movie) => {
          return(
            <Paper key={movie.id}>
            <div className="movie-card-container">
              <div className="movie-card" style={{
                "--img": `url(${movie.backdrops[0]})`
              }}>
                <div className="movie-detail">
                  <div className="movie-poster">
                     <img src={movie.poster} alt={movie.title} />
                  </div>
                  <div className="movie-title">
                    <h1>{movie.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero