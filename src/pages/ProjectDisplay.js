import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Description:</b> {project.description} {/* Display the description */}
      </p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{ fontSize: 40, color: "#3e497a" }} />
      </a>
    </div>
  );
}

export default ProjectDisplay;
