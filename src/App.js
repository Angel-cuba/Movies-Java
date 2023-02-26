import React from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          
          </Route>
      </Routes>
    </div>
  );
}

export default App;
