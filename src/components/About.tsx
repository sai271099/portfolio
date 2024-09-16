"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // IntersectionObserver to trigger animations when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="sep-border mx-6 px-4 py-16 mt-6"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex flex-col max-w-5xl mx-auto">
        <motion.div 
          className="flex flex-row gap-4 items-center mb-8"
          variants={paragraphVariants}
        >
          <motion.span 
            className="material-symbols-rounded mr-1 scale-[200%] mx-1"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            person
          </motion.span>
          <motion.h1 
            className="text-4xl font-bold" 
            id="about"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ABOUT ME
          </motion.h1>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            {[
              <p key="1">
                My journey with technology began when I discovered the power of code to create entire worlds on a screen. Since then, I&#39;ve dedicated myself to mastering the craft of software engineering, driven by a passion for solving complex problems.
              </p>,
              <p key="2">
                With over two years of experience, I specialize in full-stack development, building scalable systems with React and Angular on the front-end, and Node.js and Django on the back-end. My work focuses on optimizing system performance and scalability.
              </p>,
              isExpanded && (
                <motion.div 
                  key="3"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <p>
                    I also have extensive experience with AWS and GCP, leveraging Terraform for infrastructure automation, Docker and Kubernetes for container orchestration, and Jenkins for CI/CD pipelines. I&#39;ve built real-time data processing systems with Kafka, ensuring minimal latency and high throughput.
                  </p>
                  <p>
                    Currently pursuing my Master&#39;s in Computer Science at the University of Florida, I focus on algorithmic optimization and distributed systems. My passion for innovation drives me to constantly seek new challenges and deliver impactful solutions.
                  </p>
                  <p>
                    Outside of coding, I find inspiration in cricket and unwind with Netflix, activities that help me recharge for the next challenge.
                  </p>
                </motion.div>
              )
            ].map((paragraph, index) => (
              <motion.div key={index} variants={paragraphVariants}>
                {paragraph}
              </motion.div>
            ))}
            <motion.button 
              onClick={toggleReadMore} 
              className="text-blue-500 font-semibold mt-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </motion.button>
          </div>
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/About.jpg"
                alt="My photo"
                width={300}
                height={300}
                className="rounded-full shadow-xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
