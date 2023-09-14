import React, {memo} from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div id="gitBlock">
                <i className="fa fa-github-square"></i>
                <a href="https://github.com/ankushekapure" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div id='linkedinBlock'>
                <i className="fa fa-linkedin-square"></i>
                <a href="https://www.linkedin.com/in/ankush-ekapure/" target="_blank" rel="noreferrer">Linkedin Profile</a>
            </div>
            <div id='emailBlock'>
                <i className="fa fa-envelope"></i>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=asekapure@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
            </div>
            <div id='phoneBlock'>
                <i className="fa fa-phone-square"></i>
                Phone : +918412909146
            </div>
        </footer>

    )
}

export default memo(Footer)