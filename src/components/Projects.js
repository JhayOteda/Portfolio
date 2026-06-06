"use client";

import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";
import Card from "./UI/Card";
import styles from "./UI/styles/Projects.module.css";

// Custom Github SVG replacement
const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    title: "E-Commerce Glass UI",
    description: "A premium storefront interface featuring complete shopping cart workflows, interactive product catalogs, and custom glassmorphism design layouts.",
    tags: ["React", "Next.js", "CSS Modules", "Context API"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "Task Orchestrator API",
    description: "A secure task scheduling engine utilizing serverless API routes, offering full database synchronization capabilities and JWT-based authentication tokens.",
    tags: ["Next.js", "Node.js", "Route Handlers", "JWT"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "Interactive Analytics Dashboard",
    description: "A real-time data visualizer using dynamic SVG rendering, customizable chart layouts, global settings panel, and localStorage state syncing.",
    tags: ["React", "Vanilla JS", "CSS Variables", "Recharts"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "Minimalist Markdown Blog",
    description: "A high-performance blog rendering MDX files statically. Implements dynamic reading progress indicators, tag systems, and dark/light color themes.",
    tags: ["Next.js", "MDX", "Vanilla CSS", "SEO Tags"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://vercel.app",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>Showcase</span>
          <h2 className={styles.title}>Featured Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.filterBtn} ${
              filter === "all" ? styles.activeFilterBtn : ""
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`${styles.filterBtn} ${
              filter === "frontend" ? styles.activeFilterBtn : ""
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`${styles.filterBtn} ${
              filter === "fullstack" ? styles.activeFilterBtn : ""
            }`}
          >
            Full-Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <Card key={index} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <Code size={40} style={{ opacity: 0.8 }} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.tagGroup}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkItem}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkItem}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
