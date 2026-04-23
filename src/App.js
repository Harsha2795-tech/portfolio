import "./App.css";
import { Link } from "react-scroll";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Harsha</h2>
        <div>
          <Link to="about" smooth={true}>About</Link>
          <Link to="projects" smooth={true}>Projects</Link>
          <Link to="contact" smooth={true}>Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Harsha Nandala</h1>
        <p>Software Developer | ML Enthusiast</p>
        <Link to="projects" smooth={true} className="btn">
          View Projects
        </Link>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student passionate about Machine Learning,
          Software Development, and building impactful applications.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>C</span>
          <span>Python</span>
          <span>Java</span>
          <span>HTML</span>
          <span>MySQL</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">
          <div className="card">
            <h3>Movie Sentiment Analysis</h3>
            <p>NLP project analyzing movie reviews.</p>
            <a href="https://github.com/your-username/project">GitHub</a>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>React-based personal portfolio.</p>
            <a href="#">Live</a>
          </div>
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>📧 harshaanandala@gmail.com</p>
        <p>📞 9014544640</p>
      </section>

    </div>
  );
}

export default App;
