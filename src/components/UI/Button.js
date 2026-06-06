import styles from "./styles/UI.module.css";

export default function Button({
  children,
  variant = "primary",
  className = "",
  loading = false,
  disabled = false,
  icon: Icon,
  ...props
}) {
  const getVariantClass = () => {
    switch (variant) {
      case "secondary":
        return styles.btnSecondary;
      case "link":
        return styles.btnLink;
      case "primary":
      default:
        return styles.btnPrimary;
    }
  };

  return (
    <button
      className={`${styles.btn} ${getVariantClass()} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner} />}
      {!loading && Icon && <Icon size={18} />}
      <span>{children}</span>
    </button>
  );
}
