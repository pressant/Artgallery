import React from "react";

import image from "../images/motion-background.jpg";
import i1 from "../Arts/1.jpeg";
import i2 from "../Arts/2.jpeg";
import i3 from "../Arts/3.jpeg";
import i4 from "../Arts/4.jpeg";

const imageAltText = "purple and blue abstract background";

const projectList = [
  {
    image: i1,
    originalImage: "/arts/original/1.jpeg",
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    image: i2,
    originalImage: "/arts/original/2.jpeg",
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    image: i3,
    originalImage: "/arts/original/3.jpeg",
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    image: i4,
    originalImage: "/arts/original/4.jpeg",
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  // ... (Repeat the above objects as needed)
];

const Arts = () => {
  return (
    <section className="padding" id="arts">
      <img className="background" src={image} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>My Gallery</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.originalImage} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} style={{ maxWidth: "100%" }} />
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arts;