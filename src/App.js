import React from 'react';
import './App.css';
import Header from './components/Header'
import movies from './movies.json'
import EventSlider from './components/EventsSlider';
import MoviePlayer from './components/MoviePlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <MoviePlayer url="https://www.youtube.com/watch?v=0c4_b5PHWg8"/>
      <EventSlider movies={movies}/>
    </div>
  );
}

export default App;
