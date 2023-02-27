import React from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './views/Reviews';

function App() {
  const [movies, setMovies] = React.useState();
  const [movie, setMovie] = React.useState();
  const [reviews, setReviews] = React.useState();


  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      setMovie(response.data);
      if (response.data.reviewIds.length > 0) {
        console.log(response.data.reviewIds);
        setReviews(response.data.reviewIds);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
