'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define the types for the sections
type ExperienceSection = 'fullTime' | 'intern';

interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  image: string;
}

const Work = () => {
  const [selectedSection, setSelectedSection] = useState<ExperienceSection>('fullTime');

  // Define the experiences object with strict typing
  const experiences: Record<ExperienceSection, Experience> = {
    fullTime: {
      title: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      duration: '08/2021 – 11/2022',
      responsibilities: [
        'Led the development of a comprehensive water usage monitoring system, leveraging Angular to build an intuitive front-end, which reduced page load times by 25% and boosted user engagement by 30%.',
        'Architected and optimized RESTful APIs with Node.js and Express, ensuring secure high-frequency handling requests and enhancing real-time monitoring and alert capabilities.',
        'Spearheaded the creation of real-time analytics pipelines using WebSockets and D3.js, delivering dynamic data updates and interactive visualizations that enhanced decision-making processes for 10,000+ users.',
        'Enhanced MongoDB performance by implementing advanced indexing strategies, resulting in a 40% boost in query execution speed. Managed structured datasets with Oracle SQL, improving database efficiency, and retrieval times.',
        'Orchestrated AWS deployments using Docker and Kubernetes, improving system scalability and reducing operational downtime by 10%.',
        'Architected and implemented CI/CD pipelines using Jenkins, JUnit, and Selenium, accelerating release cycles by 15% and ensuring consistent software quality through automated testing.',
        'Directed Scrum ceremonies and enforced agile best practices, increasing team productivity and accelerating project timelines to meet tight deadlines.',
      ],
      image: '/cognizant.jpg', // Replace with the actual path or URL
    },
    intern: {
      title: 'Intern',
      company: 'Vassar Labs',
      duration: '05/2021 – 08/2021',
      responsibilities: [
        'Developed the APWRMS website utilizing AngularJS for the front end, Node.js for backend processing, and PostgreSQL for data management, increasing water resource allocation efficiency by 15%.',
        'Integrated IoT and satellite data into the APWRMS portal, driving a 12% improvement in decision-making precision through real-time updates and geospatial analysis.',
        'Enhanced system integration and relevancy by 17% through advanced connectivity with smartphone apps and geospatial analysis techniques for precise resource management.',
        'Leveraged PostgreSQL GIS extensions and satellite APIs to map water resources and soil conditions, aiding regional planning and promoting sustainability.',
      ],
      image: '/intern.jpg', // Replace with the actual path or URL
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.02, backgroundColor: '#f0f4f8', transition: { duration: 0.3 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    // Assign the id="work" to the Work Experience section
    <div id="work" className={'sep-border mx-6 px-2 py-16 mt-6'}>
      <div className={'flex flex-col max-w-5xl mx-auto'}>
        {/* Icon and Title for Work Experience */}
        <div className={'flex flex-row gap-4 items-center mb-8'}>
          <span className={'material-symbols-rounded text-4xl'}>code_blocks</span> {/* Work Icon */}
          <h1 className={'text-4xl font-bold'}>Work Experience</h1>
        </div>

        {/* Buttons for Full-Time and Intern */}
        <motion.div className="flex flex-row justify-center gap-4 mb-8">
          {['fullTime', 'intern'].map((section) => (
            <motion.button
              key={section}
              onClick={() => setSelectedSection(section as ExperienceSection)}
              className={`px-4 py-2 font-semibold border-b-4 transition-colors duration-300 ${
                selectedSection === section ? 'border-green-600' : 'border-transparent'
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {section === 'fullTime' ? 'Full-time' : 'Intern'}
            </motion.button>
          ))}
        </motion.div>

        {/* Displaying the Selected Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, x: selectedSection === 'fullTime' ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: selectedSection === 'fullTime' ? 100 : -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="motion-container"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex flex-row bg-gray-100 p-6 rounded-lg shadow-md relative"
            >
              {/* Image section */}
              <div className={'mr-6'}>
                <Image
                  src={experiences[selectedSection].image}
                  alt={`${experiences[selectedSection].company} logo`}
                  width={60}
                  height={60}
                  className={'rounded-full shadow-md'}
                />
              </div>

              {/* Content section */}
              <motion.div
                className="flex flex-col w-full"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Title and Company */}
                <h2 className={'text-2xl font-semibold'}>
                  {experiences[selectedSection].title}
                </h2>
                <p className={'text-lg text-gray-600 mb-2'}>
                  {experiences[selectedSection].company}
                </p>

                {/* Responsibilities with green arrow */}
                <motion.ul className={'ml-6 space-y-2'}>
                  {experiences[selectedSection].responsibilities.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className={'flex items-start space-x-2 text-gray-700'}
                      variants={itemVariants}
                    >
                      <span className={'text-green-500'}>&#x27A4;</span> {/* Unicode for green arrow */}
                      <p className={'text-base'}>{item}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Date Section (aligned to the right end) */}
              <div className={'absolute right-6 top-6 text-sm text-gray-500'}>
                {experiences[selectedSection].duration}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Work;
