'use client';
import { useState } from 'react';
import SectionLayout from '@/components/elements/SectionLayout';
import SectionTitle from '@/components/elements/SectionTitle';

const dataScienceProject = [
  {
    title: "Object Detection Using DeepSORT",
    github: "https://github.com/sai271099/Object-Detection-Using-Deepsort",
    image: "object.jpg", // Replace with your image path
    technologies: ["YOLOv3", "DeepSORT", "Python", "TensorFlow", "OpenCV"],
    description: "This project implements real-time object detection and multi-object tracking using YOLOv3 and DeepSORT. It tracks multiple objects efficiently and handles occlusion and fast motion."
  }
];

const webDevelopmentProjects = [
  {
    title: "GatorTaxi",
    github: "https://github.com/sai271099/GatorTaxi",
    image: "GatorTaxi.jpg",
    technologies: ["C++", "Red-Black Tree", "Min Heap"],
    description: "Implemented a ride-tracking system for efficient ride assignments using Red-Black Tree and Min Heap, ensuring optimized performance for ride cost and duration tracking."
  },
  {
    title: "GatorChefs",
    github: "https://github.com/sai271099/GatorChefs",
    image: "Gatorchefs.jpg",
    technologies: ["Django", "Python", "React", "AI"],
    description: "Developed a recipe-sharing platform that uses AI to assist users in uploading recipes, generating descriptions, and categorizing ingredients, making recipe sharing easier and faster."
  },
  {
    title: "Evershop E-commerce",
    github: "https://github.com/sai271099/Evershop",
    image: "Evershop.jpg",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    description: "Built an efficient e-commerce platform using React and Node.js, with real-time analytics and secure transactions, improving user navigation and inventory management."
  },
  {
    title: "InstaClone",
    github: "https://github.com/sai271099/Insta-Clone",
    image: "instaclone.jpg",
    technologies: ["Django", "Django Rest Framework", "JavaScript"],
    description: "Created an Instagram-like platform where users can upload and share images, follow other users, and interact with posts through likes and comments."
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('web'); // Default category

  const getProjects = () => {
    if (selectedCategory === 'data') {
      return dataScienceProject;
    }
    return webDevelopmentProjects;
  };

  return (
    <SectionLayout>
      {/* Ensure the id here matches the link in the NavBar */}
      <SectionTitle title={'Projects'} icon={'assignment'} id={'projects'} />

      {/* Buttons Below Section Title */}
      <div className="button-container">
        <button className={`btn ${selectedCategory === 'web' ? 'active' : ''}`} onClick={() => setSelectedCategory('web')}>Web Development</button>
        <button className={`btn ${selectedCategory === 'data' ? 'active' : ''}`} onClick={() => setSelectedCategory('data')}>Data Science</button>
      </div>

      {/* Projects Grid */}
      <div className="grid-container">
        {getProjects().map((project, index) => (
          <div key={index} className="project-card">
            <div className="card">
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-info">
                {/* Project Description First */}
                <p>{project.description}</p>
                {/* Technologies Used Below */}
                <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
              </div>
            </div>
            {/* Project Title and GitHub Icon Together Below Card */}
            <div className="project-footer">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={'scale-150'}>
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"/>
                    <path d="M9 20.027c-3 .973-5.5 0-7-3"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Style */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;700&display=swap');

        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 160px; /* Gap between columns */
          row-gap: 40px; /* Gap between rows */
          padding: 20px;
        }

        .button-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          gap: 15px;
        }

        .btn {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #005bb5;
        }

        .btn.active {
          background-color: #005bb5;
        }

        .project-card {
          position: relative;
          overflow: hidden;
          background-color: var(--card-bg); /* Adapt background for theme */
        }

        .card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .card-info {
          display: none;
          padding: 20px;
          font-family: 'Roboto', sans-serif;
          color: #000000; /* Adapt text color for theme */
        }

        .project-card:hover .card-info {
          display: block;
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }

        .image-container {
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .image-container img {
          transform: scale(1.05);
        }

        .project-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          gap: 15px;
        }

        .project-title {
          font-size: 1.5em;
          font-family: 'Poppins', sans-serif;
          color: var(--title-color); /* Adapt title color for theme */
        }

        .card-info p {
          font-family: 'Roboto', sans-serif;
          font-size: 0.95em;
          color: var(--text-color); /* Adapt text color for theme */
        }

        .github-link {
          display: flex;
          align-items: center;
          color: #0070f3;
          font-size: 1.1em;
          text-decoration: none;
        }

        .github-link svg {
          margin-left: 10px;
        }

        /* Dark theme support */
        :root {
          --card-bg: #fff;
          --text-color: #333;
          --title-color: #000;
        }

        [data-theme='dark'] {
          --card-bg: #333;
          --text-color: #ddd;
          --title-color: #fff;
        }
      `}</style>
    </SectionLayout>
  );
};

export default Projects;
