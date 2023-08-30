import React from 'react';

interface ProjectProps {
    NaturePics: string;
  image1: string;
  image2: string;
}

const Project: React.FC<ProjectProps> = ({ NaturePics, image1, image2 }) => {
  return (
    <div className="project">
      <h2>{NaturePics}</h2>
      <div className="project-images">
        <img src={image1} alt={`${NaturePics} Image 1`} />
        <img src={image2} alt={`${NaturePics} Image 2`} />
      </div>
    </div>
  );
};

export default Project;
