import styles from "./Projects.module.css";
import myProjects from "../../data/projects.json";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>projects</h2>
      <div className={styles.content}>
      {myProjects.map((project, id) => {
          return <ProjectsCard key={id} project={project}/>;
        })}
      </div>
    </section>
  );
}

export default Projects;
