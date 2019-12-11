import React from "react";
import "./App.css";
import ImageGetter from './components/ImageGetter';

function App() {
  return (
    <div className='App'>
      <h1>Astronomy Photo of the Day</h1>
      <ImageGetter/>
    </div>
  );//ends return
}//ends component

export default App;
