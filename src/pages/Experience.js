import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <h2 className="experience-title">My Professional Journey</h2>
      <VerticalTimeline lineColor="#ff6b6b">
        {/* Education Timeline */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#ff6b6b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">VMJ Higher Secondary School,Madurai</h3>
          <p>ISC XII</p>
          <p>Grade: 98.8%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2025"
          iconStyle={{ background: "#ff6b6b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">PSG College Of Technology,Coimbatore</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
          <p>Computer Science And Engineering</p>
          <p>Grade:8.55</p>
        </VerticalTimelineElement>

        {/* Work Experience Timeline */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#ff6b6b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Java Developer Intern - Motorola Solutions</h3>
          <h4 className="vertical-timeline-element-subtitle">Bangalore,India</h4>
          <p>Created a video recording UI for the Unified Recorder project using Hibernate, Java, SQL, and
          Angular.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#ff6b6b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Java Developer- Fiorano</h3>
          <h4 className="vertical-timeline-element-subtitle">Bangalore,India</h4>
          <p>Working on Java,Javafx and Springboot</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
