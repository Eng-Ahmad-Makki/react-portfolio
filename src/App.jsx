import styles from "./App.module.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Experiences from "./components/experiences/experiences";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/myProjects/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contacts />
      <ScrollToTop />
    </div>
  );
}

export default App;
