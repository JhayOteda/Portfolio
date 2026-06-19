"use client";

import { Hammer } from "lucide-react";
import Card from "./UI/Card";
import styles from "./UI/styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>Showcase</span>
          <h2 className={styles.title}>Featured Projects</h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <Card hoverable={false} style={{ maxWidth: "500px", width: "100%", textAlign: "center", padding: "3rem 2rem" }}>
            <div style={{ 
              width: "64px", 
              height: "64px", 
              borderRadius: "50%", 
              background: "rgba(var(--primary-rgb), 0.08)", 
              border: "1px solid rgba(var(--primary-rgb), 0.15)",
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem"
            }}>
              <Hammer size={32} />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "0.75rem" }}>
              Under Construction
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              No projects to display yet. I am currently learning, practicing, and building some exciting new web creations. Stay tuned!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
