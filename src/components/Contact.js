"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import styles from "./UI/styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey || "0efd6094-a34a-438e-be5e-9d129f88cc65",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} - Portfolio Contact`,
          subject: `New Message from Portfolio: ${formData.name}`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>Get In Touch</span>
          <h2 className={styles.title}>Contact Me</h2>
        </div>

        <div className={styles.contactGrid}>
          {/* Info Card Column */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>Let's discuss something great</h3>
            <p className={styles.infoDesc}>
              Whether you want to build a new web app, have a project to collaborate on, or just want to say hi, feel free to send a message.
            </p>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>jhayoteda9@gmail.com</div>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Talisay City, Cebu, Philippines</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form Card Column */}
          <Card hoverable={false}>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {status.type === "success" && (
                <div className={`${styles.statusMessage} ${styles.successMessage}`}>
                  <CheckCircle size={18} />
                  <span>{status.message}</span>
                </div>
              )}
              {status.type === "error" && (
                <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
                  <AlertCircle size={18} />
                  <span>{status.message}</span>
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="John Doe"
                  disabled={loading}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="john@example.com"
                  disabled={loading}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Type your message here..."
                  disabled={loading}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <Button
                type="submit"
                variant="primary"
                loading={loading}
                icon={Send}
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
