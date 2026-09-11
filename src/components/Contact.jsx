import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBriefcase
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
    >
      <h1>Contact Me</h1>

      <div className="contact-grid">

        {/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bawaskarpratiksha8@gmail.com&su=Job%20Opportunity"
  target="_blank"
  rel="noreferrer"
  className="contact-box"
>
  <FaEnvelope className="contact-icon" />
  <h3>Email</h3>
  <p>Send Email</p>
</a>

        {/* GitHub */}
       <a
  href="https://github.com/pratiksha-bawaskar"
  target="_blank"
  rel="noreferrer"
  className="contact-box"
>
  <FaGithub className="contact-icon" />
  <h3>GitHub</h3>
  <p>View Profile</p>
</a>

        {/* LinkedIn */}
      <a
  href="https://linkedin.com/in/pratiksha-bawaskar8"
  target="_blank"
  rel="noreferrer"
  className="contact-box"
>
  <FaLinkedin className="contact-icon" />
  <h3>LinkedIn</h3>
  <p>Connect With Me</p>
</a>
        {/* Available For */}
        <div className="contact-box">
          <FaBriefcase className="contact-icon" />
          <h3>Available For</h3>

          <p>Java Full Stack Developer</p>
          <p>Backend Developer</p>
          <p>Java Developer</p>
          <p>Software Engineer</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;