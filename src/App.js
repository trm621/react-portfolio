import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header>
        <Navigation>
        </Navigation>
      </Header>
      <main>
        {/* <Project></Project> */}
      </main>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
