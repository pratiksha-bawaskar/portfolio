import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt
} from "react-icons/fa";

function About() {
  return (
    <section
  id="about"
  className="about"
  data-aos="fade-up"
>
      <div className="about-card">

        {/* Left Side */}
        <div className="about-left">

          <h4>About Me</h4>

          <h1>
          Java Full Stack Developer
          </h1>

          <p>
            Building scalable applications using Java,
            Spring Boot, React, MySQL and Microservices.
            I enjoy developing modern web applications
            and turning ideas into real-world solutions.
          </p>

          <div className="about-info">

            <div className="small-card">
              <FaGraduationCap />

              <div>
                <h3>Education</h3>
                <p>B.Tech Graduate (2024)</p>
              </div>
            </div>

            <div className="small-card">
              <FaMapMarkerAlt />

              <div>
                <h3>Location</h3>
                <p>Maharashtra, India</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="about-right">

          <div className="developer-card">
            <img
              src="/images/developer.png"
              alt="Developer"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;