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
            <GitHubIcon/>
            <MailIcon/>
            <LinkedInIcon/>
            <WhatsAppIcon/>
        </div>
        <p>&copy;2024 PrajeethPortfolio.com</p>
    </div>
  )
}

export default Footer
