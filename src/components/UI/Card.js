import styles from "./styles/UI.module.css";

export default function Card({ children, className = "", hoverable = true, ...props }) {
  return (
    <div
      className={`${styles.card} ${hoverable ? styles.cardHover : ""} ${className}`}
      {...props}
    >
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
