import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Harsha Nandala</h1>
        <p>CSE Student | Aspiring Software Engineer</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student at Mahindra University with interest in
          Machine Learning and Software Development. I enjoy building real-world
          applications and learning new technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>C</span>
          <span>Python</span>
          <span>Java</span>
          <span>HTML</span>
          <span>MySQL</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Movie Sentiment Analysis</h3>
          <p>
            NLP-based project analyzing movie reviews using preprocessing techniques
            like tokenization and stemming.
          </p>
          <a href="https://github.com/your-username/project">GitHub</a>
        </div>

      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>📞 9014544640</p>
        <p>📧 harshaanandala@gmail.com</p>
      </section>

    </div>
  );
}

export default App;
