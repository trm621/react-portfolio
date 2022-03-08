import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CurrentPage from './components/CurrentPage';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: "about",
      description: "none",
    },
    {
      name: "projects",
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
      <Header />
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        <CurrentPage currentCategory={currentCategory}></CurrentPage>
      </main>
      <Footer />
    </div>
  );
}

export default App;
