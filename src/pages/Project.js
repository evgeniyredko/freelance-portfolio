import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectsList";
import gitHubIcon from "./../img/icons/buttons/gitHub-black.svg";
import behanceIcon from "./../img/icons/buttons/behance.svg";
import figmaIcon from "./../img/icons/buttons/figma.svg";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <h1 className="title-1">{project.title}</h1>
          </a>

          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          </a>

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <div className="project-details__buttons">
            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <img src={gitHubIcon} alt="" />
                GitHub
              </a>
            )}

            {project.behanceLink && (
              <a
                href={project.behanceLink}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <img src={behanceIcon} alt="" />
              </a>
            )}

            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <img src={figmaIcon} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
