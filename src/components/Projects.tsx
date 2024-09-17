'use client';
import SectionLayout from '@/components/elements/SectionLayout';
import SectionTitle from '@/components/elements/SectionTitle';
import { useState } from 'react';

const initialProjects = [
  {
    title: "GatorTaxi",
    github: "https://github.com/your_github/gatortaxi",
    image: "GatorTaxi.jpg",
    technologies: ["C++", "Red-Black Tree", "Min Heap"],
    description: "Implemented a ride-tracking system for efficient ride assignments using Red-Black Tree and Min Heap, ensuring optimized performance for ride cost and duration tracking."
  },
  {
    title: "GatorChefs",
    github: "https://github.com/your_github/gatorchefs",
    image: "Gatorchefs.jpg",
    technologies: ["Django", "Python", "React", "AI"],
    description: "Developed a recipe-sharing platform that uses AI to assist users in uploading recipes, generating descriptions, and categorizing ingredients, making recipe sharing easier and faster."
  },
  {
    title: "Evershop E-commerce",
    github: "https://github.com/your_github/evershop",
    image: "Evershop.jpg",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    description: "Built an efficient e-commerce platform using React and Node.js, with real-time analytics and secure transactions, improving user navigation and inventory management."
  },
  {
    title: "InstaClone",
    github: "https://github.com/your_github/instaclone",
    image: "instaclone.jpg",
    technologies: ["Django", "Django Rest Framework", "JavaScript"],
    description: "Created an Instagram-like platform where users can upload and share images, follow other users, and interact with posts through likes and comments."
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <SectionLayout>
      {/* Use the "assignment" icon to match the first image */}
      <SectionTitle title={'Projects'} icon={'assignment'} id={'projects'} />

      {/* Projects Grid */}
      <div className="grid-container">
        {initialProjects.map((project, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-info">
              <h3>{project.title}</h3>
              <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Style */}
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, max-height 0.4s ease-in-out, opacity 0.3s ease;
          max-height: 300px;
        }

        .card-info {
          padding: 0 20px;
        }

        .card-info h3 {
          font-size: 1.5em;
          margin-bottom: 10px;
          color: #333;
        }

        .card-info p,
        .card-info a {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .card:hover .card-info p,
        .card:hover .card-info h3,
        .card:hover .card-info a {
          opacity: 1;
          transform: translateY(0);
        }

        .card:hover {
          transform: translateY(-10px);
          max-height: 500px;
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
          object-fit: contain;
        }

        .github-link {
          display: flex;
          align-items: center;
          margin-top: 10px;
          color: #0070f3;
          font-size: 1.1em;
          text-decoration: none;
        }

        .github-link i {
          margin-right: 8px;
        }
      `}</style>
    </SectionLayout>
  );
};

export default Projects;
