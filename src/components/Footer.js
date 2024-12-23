import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import  "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
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
        <p>&copy;2024 PrajeethPortfolio.com</p>
    </div>
  )
}

export default Footer
