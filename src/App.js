import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: "about",
      description: "none",
    },
    {
      name: "portfolio",
      description: "none",
    },
    {
      name: "contact",
      description: "none",
    },
    {
      name: "resume",
      description: "none",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header>
      </Header>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Navigation>
      <main>
        {/* <Project></Project> */}
      </main>
      <Footer>
      </Footer>
      </div>
  );
}

export default App;
