import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCogs,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiHibernate
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h1>My Skills</h1>

      <div className="skill-box">

        <div className="skill-card">
          <FaJava className="icon java" />
          <h3>Java</h3>
        </div>

        <div className="skill-card">
          <SiSpringboot className="icon spring" />
          <h3>Spring Boot</h3>
        </div>

        <div className="skill-card">
          <MdSecurity className="icon security" />
          <h3>Spring Security</h3>
        </div>

        <div className="skill-card">
          <SiHibernate className="icon hibernate" />
          <h3>Hibernate</h3>
        </div>

        <div className="skill-card">
          <FaReact className="icon react" />
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <SiJavascript className="icon js" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaHtml5 className="icon html" />
          <h3>HTML</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon css" />
          <h3>CSS</h3>
        </div>

        <div className="skill-card">
          <FaDatabase className="icon mysql" />
          <h3>MySQL</h3>
        </div>

        <div className="skill-card">
          <FaGitAlt className="icon git" />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaDocker className="icon docker" />
          <h3>Docker</h3>
        </div>

        <div className="skill-card">
          <FaAws className="icon aws" />
          <h3>AWS</h3>
        </div>

        <div className="skill-card">
          <FaCogs className="icon micro" />
          <h3>Microservices</h3>
        </div>

      </div>
    </section>
  );
}

export default Skills;