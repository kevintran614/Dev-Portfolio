"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Snap Chef",
    description:
      "Welcome to Snap-Chef! This is a full-stack machine learning application utilizing React, Bootstrap, Node,js, PostgreSQL, and AWS S3 Bucket that leverages Hugging Face's computer vision and named entity recognition models to identify ingredients from user-uploaded images or text and generate recipes with detailed instructions. Have groceries in your refrigerator or pantry and don't know what to make with them? Snap-Chef is the answer!",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Machine Learning"],
    gitUrl: "https://github.com/kevintran614/Snap-Chef",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "League Insights Dashboard",
    description:
      "Welcome to the League Insights Hub! This is a full-stack application leveraging React, Bootstrap, Node.js, and PostgreSQL. League Insights is a comprehensive League of Legends dashboard using the Riot Developer API that allows users to query detailed player statistics for over 180 million users. Metrics include Player Level, Rank, Win/Loss Ratio, Champion Mastery, and more.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kevintran614/League-Insights-Hub",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "AI Trading Agent",
    description:
      "Created a fully operational AI trading agent that uses historical stock data from S&P 500 to train a machine learning model that uses stock indicators to generate stock trades, maximizing stock returns compared to a benchmark model by over 50%. Leveraged 3 feature indicators such as Simple Moving Average (SMA), Bollinger-Band Percentages (BBP), and Moving Average Convergence/Divergence (MACD) with a n = 20-day lookback period.",
    image: "/images/projects/3.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://omscs.gatech.edu/cs-7646-machine-learning-trading",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
