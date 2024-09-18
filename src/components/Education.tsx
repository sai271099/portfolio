"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const Education = () => {
  const [selectedSection, setSelectedSection] = useState('graduate');
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="sep-border mx-6 px-2 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex flex-col max-w-5xl mx-auto" variants={itemVariants}>
        <motion.div 
          className="flex flex-row gap-4 items-center mb-8"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.span 
            className="material-symbols-rounded mr-1 scale-[200%] mx-1"
          >
            school
          </motion.span>
          <motion.h1 
            className="text-4xl font-bold"
            id="education"
            whileHover={{ scale: 1.05 }}
          >
            Education
          </motion.h1>
        </motion.div>

        <motion.div className="flex flex-row justify-center gap-4 mb-8">
          {['graduate', 'undergraduate'].map((section) => (
            <motion.button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-4 py-2 font-semibold border-b-4 transition-colors duration-300 ${
                selectedSection === section ? 'border-green-600' : 'border-transparent'
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, x: selectedSection === 'graduate' ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: selectedSection === 'graduate' ? 100 : -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {selectedSection === 'graduate' ? <UF_EducationCard /> : <VasaviEducationCard />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const UF_EducationCard = () => {
  const skills = [
    'Algorithms',
    'Data Science',
    'Advanced Computer Networks',
    'Natural Language Processing',
    'Intro to Cryptology',
    'Trustworthy Machine Learning',
    'Computer Network Security',
  ];

  return (
    <motion.div 
      className="flex flex-row-reverse gap-5 -ml-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-3/5"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/uf.jpg"
          alt="UF Cover Photo"
          className="rounded-lg object-cover w-full h-full"
          width={400}
          height={200}
        />
      </motion.div>
      <motion.div 
        className="flex flex-col gap-3 p-4 w-2/5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="opacity-75">Master of Science in</span>{' '}
          <span className="font-semibold">Computer Science</span>{' '}
          <span className="opacity-75">at </span>
          <span className="font-semibold">University of Florida</span>
          <motion.p 
            className="text-xs font-semibold uppercase py-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="opacity-60">Jan 2023 -</span>{' '}
            <span className="text-green-600">Dec 2024</span>
          </motion.p>
        </motion.h2>
        <motion.p 
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          At the University of Florida, I have concentrated on mastering advanced concepts in algorithms, data science, and computer network security, while building a robust theoretical and practical foundation in distributed systems, machine learning, and cloud computing. The program&#39;s emphasis on cutting-edge technologies and complex problem-solving has equipped me with the tools to architect scalable systems and optimize computational efficiency in diverse environments.
        </motion.p>
        <motion.h3 
          className="font-medium"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Coursework:
        </motion.h3>
        <motion.div 
          className="inline-flex flex-row flex-wrap gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 border rounded-full py-1 px-3 font-medium text-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const VasaviEducationCard = () => {
  return (
    <motion.div 
      className="flex flex-row-reverse gap-5 -ml-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-3/5"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/vce.jpg"
          alt="Vasavi College of Engineering"
          className="rounded-lg object-cover w-full h-full"
          width={400}
          height={200}
        />
      </motion.div>
      <motion.div 
        className="flex flex-col gap-3 p-4 w-2/5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="opacity-75">Bachelor of Engineering in</span>{' '}
          <span className="font-semibold">Information Technology</span>{' '}
          <span className="opacity-75">at </span>
          <span className="font-semibold">Vasavi College of Engineering</span>
          <motion.p 
            className="text-xs font-semibold uppercase py-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="opacity-60">Aug 2017 -</span>{' '}
            <span className="text-green-600">July 2021</span>
          </motion.p>
        </motion.h2>
        <motion.p 
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          At Vasavi College of Engineering, I built a strong foundation in software development, databases, and networking, honing my skills in technologies such as Java, Python, and SQL. My academic journey was complemented by active participation in tech clubs and coding challenges, which further strengthened my problem-solving abilities.
        </motion.p>
        <motion.p 
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          During this time, I also contributed to significant research in computer vision. My work on object detection using DeepSort was published by{' '}
          <motion.a 
            href="https://link.springer.com/chapter/10.1007/978-981-19-3391-2_23" 
            className="underline text-blue-600 hover:text-blue-800"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
          >
            Springer
          </motion.a>
          , showcasing my ability to apply advanced algorithms in real-world applications.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Education;