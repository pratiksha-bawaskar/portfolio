import { useState } from "react";

function Projects() {

  const [activeScreenshots, setActiveScreenshots] = useState(null);

  const talentLensScreenshots = [
    "/images/talentlens/login.jpeg",
    "/images/talentlens/Create_User.jpeg",
    "/images/talentlens/Main_Page.jpeg",
    "/images/talentlens/TalentLens_Dashboard.jpeg",
    "/images/talentlens/TalentLens_Copilot.jpeg"
  ];

  // Travel Guide screenshots
  // Add your actual screenshot filenames here later.
  const travelScreenshots = [];

  const openScreenshots = (project) => {
    setActiveScreenshots(project);
  };

  const closeScreenshots = () => {
    setActiveScreenshots(null);
  };

  const currentScreenshots =
    activeScreenshots === "talentlens"
      ? talentLensScreenshots
      : travelScreenshots;

  const currentTitle =
    activeScreenshots === "talentlens"
      ? "TalentLens AI Screenshots"
      : "Travel Guide Screenshots";

  return (
    <section
      id="projects"
      className="projects"
    >

      <h1>Projects</h1>

      <div className="project-container">

        {/* TalentLens AI Project */}

        <div className="project-card">

          <div className="project-image">
            <img
              src="/images/resume.png"
              alt="TalentLens AI"
            />
          </div>

          <div className="project-content">

            <h2>TalentLens AI</h2>

            <p>
              Recruiter-focused resume analysis and candidate ranking platform
              built using React, Spring Boot Microservices and MySQL.
            </p>

            <div className="project-buttons">

              <a
                href="https://resume-ranking-frontend-kohf.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/pratiksha-bawaskar/smart-ai-resume-analyzer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <button
                type="button"
                onClick={() => openScreenshots("talentlens")}
                style={{
                  background: "#38bdf8",
                  color: "#00111f",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Screenshots
              </button>

            </div>

          </div>

        </div>


        {/* Travel Guide Project */}

        <div className="project-card">

          <div className="project-image">
            <img
              src="/images/travel.png"
              alt="Travel Guide Application"
            />
          </div>

          <div className="project-content">

            <h2>Travel Guide Application</h2>

            <p>
              Tourist recommendation application developed
              using React, Java and REST APIs.
            </p>

            <div className="project-buttons">

              <a
               href="https://travel-guide-frontend-mv47.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/pratiksha-bawaskar/travel-guide-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <button
                type="button"
                onClick={() => openScreenshots("travel")}
                style={{
                  background: "#38bdf8",
                  color: "#00111f",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Screenshots
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Screenshots Modal */}

      {activeScreenshots && (
        <div
          onClick={closeScreenshots}
          style={{
            position: "fixed",
            inset: "0",
            background: "rgba(0, 0, 0, 0.82)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            zIndex: "9999"
          }}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(1000px, 95vw)",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#0b1b33",
              border: "1px solid rgba(56, 189, 248, 0.5)",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)"
            }}
          >

            {/* Close Button */}

            <button
              type="button"
              onClick={closeScreenshots}
              style={{
                position: "absolute",
                top: "12px",
                right: "15px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: "2"
              }}
            >
              ✕
            </button>

            <h2
              style={{
                color: "#38bdf8",
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              {currentTitle}
            </h2>

            {currentScreenshots.length > 0 ? (

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "20px"
                }}
              >

                {currentScreenshots.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#132642",
                      padding: "10px",
                      borderRadius: "10px",
                      border:
                        "1px solid rgba(56, 189, 248, 0.25)"
                    }}
                  >

                    <img
                      src={image}
                      alt={`${currentTitle} ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "6px"
                      }}
                    />

                  </div>
                ))}

              </div>

            ) : (

              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  padding: "50px 20px",
                  fontSize: "16px"
                }}
              >
                📸 Travel Guide screenshots will be added soon.
              </div>

            )}

          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;