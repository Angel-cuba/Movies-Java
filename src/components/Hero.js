import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function Hero({movies}) {
  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {movies?.map((movie) => (
          <Paper key={movie.id}>
            <div class="movie-card-container">
              <div class="movie-card">
                <div class="movie-detail">
                  <div class="movie-poster">
                     <img src={movie.poster} alt={movie.title} />
                  </div>
                  <div class="movie-title">
                    <h1>{movie.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  )
}

export default Hero