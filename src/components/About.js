import { User, MapPin, Mail, GraduationCap } from "lucide-react";
import Image from "next/image";
import Card from "./UI/Card";
import styles from "./UI/styles/About.module.css";

export default function About() {
  const infoDetails = [
    { label: "Role", value: "Web Developer", icon: User },
    { label: "Location", value: "Talisay City, Cebu, Philippines", icon: MapPin },
    { label: "Email", value: "jhayoteda9@gmail.com", icon: Mail },
    { label: "Degree", value: "B.S. Information Technology", icon: GraduationCap },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>Biography</span>
          <h2 className={styles.title}>About Me</h2>
        </div>

        <div className={styles.aboutGrid}>
          {/* Left Column: Visual Mockup for Profile Image */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <div className={styles.photoPlaceholder} style={{ padding: 0, overflow: "hidden" }}>
                <Image
                  src="/j-img.jpg"
                  alt="About Jhay"
                  width={360}
                  height={360}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className={styles.info}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
              Building a strong foundation in code and design.
            </h3>

            <p className={styles.bio}>
              I am currently studying at the University of Cebu - Main Campus, where I am focusing on building my skills to become a proficient web developer. I believe that programming is an art of continuous improvement, and I enjoy dedicating time to practice and learning.
            </p>

            <p className={styles.bio}>
              From designing responsive layouts to connecting frontend interfaces with PHP and MySQL backends, I enjoy seeing how different parts of an application interact. I am focused on writing clean, readable code and expanding my knowledge with every project I build.
            </p>

            <Card hoverable={false} style={{ marginTop: "1rem" }}>
              <ul className={styles.detailsList}>
                {infoDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <li key={index} className={styles.detailItem}>
                      <span className={styles.detailLabel}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                          <Icon size={12} />
                          {detail.label}
                        </span>
                      </span>
                      <span className={styles.detailValue}>{detail.value}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
