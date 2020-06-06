import React from 'react';
import './App.css';
import About from './component/About';
import Songs from './component/Songs';
import Forum from './component/Forum';
import Landing from './component/Landing';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <br/>
      <About />
      <br/>
      <Songs />
      <br/>
      <Forum />
      <Footer />
    </div>
  );
}

export default App;
