import React from 'react'
import Hero from '../components/Hero'

function Home({movies}) {
  return (
    <Hero movies={movies}/>
  )
}

export default Home