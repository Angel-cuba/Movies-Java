import React from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {
  const [movies, setMovies] = React.useState();
  console.log('🚀 ~ file: App.js:6 ~ App ~ movies:', movies);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
