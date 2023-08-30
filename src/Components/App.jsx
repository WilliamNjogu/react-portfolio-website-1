import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import Project from './components/Project';
import project1Image1 from './assets/project1Image1.jpg';
import project1Image2 from './assets/project1Image2.jpg';
import project2Image1 from './assets/project2Image1.jpg';
import project2Image2 from './assets/project2Image2.jpg';
import project3Image1 from './assets/project3Image1.jpg';
import project3Image2 from './assets/project3Image2.jpg';
import project4Image1 from './assets/project4Image1.jpg';
import project4Image2 from './assets/project4Image2.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
      <Project
        NaturePics="Project 1"
        image1={project1Image1}
        image2={project1Image2}
      />
      <Project
        NaturePics="Project 2"
        image1={project2Image1}
        image2={project2Image2}
      />
       <Project
        NaturePics="Project 3"
        image1={project3Image1}
        image2={project3Image1}
      />
       <Project
        NaturePics="Project 4"
        image1={project4Image1}
        image2={project4Image2}
      />
    </div>
  );
};

export default App;
