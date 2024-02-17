import { getImageUrl } from "../../utils";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>contacts</h2>
        <p> feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:eng.ahmad.makki@gmail.com">
            {" "}
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.facebook.com/abojamal.007/">
            <img
              src={getImageUrl("contact/facebook.png")}
              alt="FaceBook Icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/ahmad-makki007">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin icon"
            />
          </a>
        </li>

        <li className={styles.link}>
          <a href="https://wa.me/963995557828">
            <img src={getImageUrl("contact/whatsup.png")} alt="Whats'up icon" />
          </a>
        </li>

        <li className={styles.link}>
          <a href="https://github.com/Eng-Ahmad-Makki/my-work.git">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github Icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contacts;
