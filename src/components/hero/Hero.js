import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Hero({ movies }) {
  const navigate = useNavigate();
  function reviewsAction(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.id}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{
                    '--img': `url(${movie.backdrops[0]})`,
                  }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h1>{movie.title}</h1>
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon icon={faCirclePlay} className="play-button-icon" />
                        </div>
                      </Link>
                      <div className="movie-review-button-container">
                        <Button variant="info" className="movie-review-button" onClick={() => reviewsAction(movie.imdbId)}>
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
