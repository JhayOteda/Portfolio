import { Layout, Server, Settings, Code, Database, Globe } from "lucide-react";
import Card from "./UI/Card";
import styles from "./UI/styles/Skills.module.css";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "UI Performance"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "PHP", "MySQL"],
  },
  {
    title: "Tools & Workflows",
    icon: Settings,
    skills: ["Git & GitHub", "Vercel Deployments", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>Superpowers</span>
          <h2 className={styles.title}>Skills & Expertise</h2>
        </div>

        <div className={styles.categoryGrid}>
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx} hoverable={true}>
                <h3 className={styles.categoryTitle}>
                  <Icon size={20} style={{ color: "var(--primary)" }} />
                  {category.title}
                </h3>
                <div className={styles.badgesGrid}>
                  {category.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className={styles.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
