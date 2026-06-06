"use client";

import { Mail, Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "./UI/Button";
import styles from "./UI/styles/Hero.module.css";

// Custom Brand SVGs to replace deprecated lucide-react brand icons
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

const Linkedin = ({ size = 24, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Text Content */}
          <div className={`${styles.content} animate-fade-in-up`}>
            <div className={styles.badge}>
              <Terminal size={14} />
              <span>Available for Hire</span>
            </div>

            <h1 className={styles.title}>
              Hi, I am <span className={styles.gradientText}>Jhay</span> <br />
              Web Developer
            </h1>

            <p className={styles.description}>
              I am an aspiring web developer currently studying at the University of Cebu - Main Campus. I am passionate about writing clean code and constantly learning new tools to build engaging, responsive web applications.
            </p>

            <div className={styles.btnGroup}>
              <Button
                variant="primary"
                onClick={() => handleScrollTo("projects")}
                icon={ArrowRight}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleScrollTo("contact")}
              >
                Let's Talk
              </Button>
            </div>

            <div className={styles.socials}>
              <a
                href="https://github.com/JhayOteda"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:jhayoteda9@gmail.com"
                className={styles.socialLink}
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className={`${styles.illustrationContainer} animate-fade-in`}>
            <div className={styles.glowingBlob} />
            <div className={styles.avatarCard}>
              <div className={styles.avatarIcon} style={{ overflow: "hidden", borderStyle: "solid" }}>
                <Image
                  src="/j-img.jpg"
                  alt="Jhay"
                  width={100}
                  height={100}
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h2 className={styles.avatarName}>Jhay Oteda</h2>
              <p className={styles.avatarTitle}>Web Developer</p>

              <div className={styles.avatarMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>2+</span>
                  <span className={styles.metaLbl}>Years Exp</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>5+</span>
                  <span className={styles.metaLbl}>Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
