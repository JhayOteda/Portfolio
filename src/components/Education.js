import Card from "./UI/Card";
import styles from "./UI/styles/Education.module.css";

const educationData = [
  {
    degree: "B.S. in Information Technology",
    school: "University of Cebu - Main Campus",
    period: "2023 - Present",
    description: "",
  },
  {
    degree: "Junior High and Senior High School",
    school: "Camotes Hillside Academy",
    period: "2017 - 2023",
    description: "Graduated with honors under the Science, Technology, Engineering, and Mathematics (STEM) academic strand.",
  },
  {
    degree: "Elementary School Education",
    school: "Teguis Elementary School",
    period: "2011 - 2017",
    description: "Graduated with Honors.",
  },
];

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>My Journey</span>
          <h2 className={styles.title}>Education History</h2>
        </div>

        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.nodeDot} />

              <Card className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.header}>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <span className={styles.period}>{item.period}</span>
                  </div>

                  <div className={styles.school}>{item.school}</div>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
