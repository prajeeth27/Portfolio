import React from 'react';
import MailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import "../styles/Home.css";
import Prajeeth from "../assets/Prajeeth.jpg";

function Home() {
  const skills = [
    { title: "Web Development", details: "React.js, Node.js, MongoDB, HTML, CSS" },
    { title: "Programming Languages", details: "Java, Python, C Programming" },
    { title: "Data Analytics Skills", details: "Machine Learning, Artificial Intelligence" },
    { title: "Core Technical Skills", details: "DBMS, Data Structures, OOPS" },
    { title: "Other Skills", details: "Communication Skills, Presentation Skills" },
  ];

  return (
    <div className="home">
      {/* About Section */}
      <div className="about">
        <h2>Hi, I Am Prajeeth</h2>

        {/* Profile Image */}
        <div className="profile-img">
          <img src={Prajeeth} alt="Prajeeth" />
        </div>

        <div className="prompt">
          <p>
            I am a tech enthusiast skilled in full-stack web development and network programming,
            with experience in enhancing CNN performance, database management, and developing
            innovative solutions. Passionate about applying AI and ML to real-world problems.
            Graduated in Computer Science with a strong foundation in software development and
            database management.
          </p>
          {/* Social Links */}
          <div className="socialLinks">
            <a href="https://github.com/prajeeth27" target="_blank" >
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/prajeethm" target="_blank" >
              <LinkedInIcon />
            </a>
            <a href="mailto:prajeethmarimuthu27@gmail.com">
              <MailIcon />
            </a>
            <a href="https://api.whatsapp.com/send?phone=7904250260" target="_blank" >
            <WhatsAppIcon/>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h1>Skills</h1>
        <div className="list">
          {skills.map((skill, index) => (
            <div key={index} className="item">
              <div className="front">
                <h2>{skill.title}</h2>
              </div>
              <div className="back">
                <span>{skill.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
