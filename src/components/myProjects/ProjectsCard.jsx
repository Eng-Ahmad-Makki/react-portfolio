import { getImageUrl } from "../../utils";
import styles from "./ProjectsCard.module.css";

function ProjectsCard({
  project: { title, imageSrc, skills, description, source, demo },
}) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`/image of ${title}`}
        className={styles.img}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {" "}
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;
