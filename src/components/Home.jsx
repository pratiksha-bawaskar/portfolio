function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-card">

        <div className="hero-content">

          <h3>Hello, I'm</h3>

          <h1>Pratiksha Bawaskar</h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            Passionate about building scalable applications using
            Java, Spring Boot, React and Microservices.
          </p>

          <div className="buttons">

  <button
    onClick={() =>
      document
        .getElementById("contact")
        .scrollIntoView({
          behavior: "smooth"
        })
    }
  >
    Contact Me
  </button>

  <a
    href="/resume.pdf"
    download
    className="resume-btn"
  >
    Download Resume
  </a>

</div>
        </div>

        <div className="hero-image">
         <img
  src="/images/profile.jpeg"
  alt="Pratiksha"
/>
        </div>

      </div>

    </section>
  );
}

export default Home;