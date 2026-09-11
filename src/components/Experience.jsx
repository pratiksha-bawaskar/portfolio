const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1>Experience</h1>

<div className="experience-card">

    <div className="experience-left">

        <h2>Accenture</h2>

        <h3>System Developer Intern (Remote)</h3>

        <p className="duration">
            Apr 2025 – Aug 2025
        </p>

        <ul>
            <li>Worked on enterprise workflow automation using SAP ABAP.</li>

            <li>Debugged backend logic and optimized SQL queries.</li>

            <li>Collaborated with teams and gained exposure to enterprise-level architecture.</li>
        </ul>

        <div className="experience-buttons">
    <a
        href="/documents/offer-letter.pdf"
        target="_blank"
        rel="noreferrer"
    >
        Offer Letter
    </a>

    <a
        href="/documents/accenture_certificate.jpeg"
        target="_blank"
        rel="noreferrer"
    >
        Certificate
    </a>
</div>

    </div>

 <div className="experience-right">
    <img
        src="/images/accenture-logo.png"
        alt="Accenture"
    />
</div>
</div>
  </section>
  );
};

export default Experience;