import React from "react";
import About from "../About";
import Project from '../Project';
import Contact from "../Contact";
import Resume from "../Resume";

const Page = ({ currentCategory }) => {
  const pageswitch = () => {
    switch (currentCategory.name) {
      case "about":
        return <About></About>;
      case "projects":
        return <Project></Project>

      case "contact":
        return <Contact></Contact>;
      case "resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };
  return <div>{pageswitch()}</div>;
};

export default Page;