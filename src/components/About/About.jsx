import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

function About() {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="About Me Image"
          className={styles.img}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
        <div className={styles.aboutItemText}>
          <h3>Frontend Developer</h3>
          <p>
            I'm a front-end developer with experience in building responsive and
            optimized sites using Vite with React and Html,Css
          </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
        <div className={styles.aboutItemText}>
        <h3>Ui-Ux designer</h3>
          <p>
          ability to use figma and understanding designs
          </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
        <div className={styles.aboutItemText}>
        <h3>APIs</h3>
          <p>
          fetching and catch data from APis 
          </p>
          </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default About;
