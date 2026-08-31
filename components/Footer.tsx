import { contact } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          <div className={styles.social}>
            <a href={contact.socials.x}>X</a>
            <a href={contact.socials.instagram}>Instagram</a>
            <a href={contact.socials.behance}>Behance</a>
            <a href={contact.socials.dribbble}>Dribbble</a>
          </div>
        </div>
        <div className={styles.line} />
        <p className="t-body2">
          © {new Date().getFullYear()} Souvik Bhattacharya. Built with vibe coding.
        </p>
      </div>
    </footer>
  );
}
