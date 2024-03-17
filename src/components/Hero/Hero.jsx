import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ahmad Makki</h1>
        <p className={styles.description}>
          I'm a FrontEnd Web developer with 2 years of experience using Vite
          with ReactJS along with Html & CSS. Reach out if you'd like to learn
          more
        </p>
        <a
          href="mailto:Eng.ahmad.makki@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.mailBtn}
        >
          Mail Me
        </a>
      </div>
      <img
        src={getImageUrl("me/me.png")}
        alt="image of Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
