import React, { useState } from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'
function Projects() {


  const [selectedPro, setselectedPro] = useState("")
  const projectDetails = {
    textTransformpro: {
      title: "Text Transform Pro",
      overview: "Text Transform Pro is a versatile web application designed to simplify text manipulation and analysis. This project leverages the power of React and a user-friendly interface to offer a range of text transformation features. Whether you need to convert text to uppercase or lowercase, remove extra spaces, capitalize words, or even analyze word count and reading time, Text Transformation Pro has you covered.",
      features: "Text Conversion, Space Management, Capitalization, Word Count & Analysis, Text Copying, Alerts and Dark Mode.",
      technologies: "HTML, CSS, React.js, JavaScript",
      code: "https://github.com/ankushekapure/text-transform-pro",
      live: "https://ankushekapure.github.io/text-transform-pro/"
    },
    chatApp: {
      title: "Real Time Chat App",
      overview: "I developed a real-time chat application using Node.js and Socket.IO, enabling users to engage in instant messaging. This project highlights my expertise in server-side scripting and WebSocket-based communication.",
      features: "Real-time Chat, User-Friendly Interface, Message Broadcasting, Notifications, Personalized Greetings, Dynamic Message Display, Responsive Design.",
      technologies: "Node.js, Socket.IO, HTML, CSS, JavaScript.",
      code: "https://github.com/ankushekapure/chat-app",
      live: null
    },
    newsly: {
      title: "Newsly - News App",
      overview: "The News App is a web application that allows users to access and browse the latest news articles from various categories. It provides a user-friendly interface to stay updated with current events and news in different fields. The app utilizes the News API to fetch and display news articles.",
      features: "Category Based News, Infinite Scrolls, Article Details, Loading Indicator, Responsive Design",
      technologies: "HTML, CSS, React.js, News API, Infinite Scroll Component Library, Loading Bar Component Library.",
      code: "https://github.com/ankushekapure/newsly",
      live: "https://ankushekapure.github.io/newsly/"
    },
    notesKeeper: {
      title: "Notes Keeper",
      overview: "Notes Keeper is a web-based note-taking application that allows users to create, edit, and organize their notes. It provides a user-friendly interface for managing personal notes and offers features like note creation, editing, and deletion.",
      features: "Note Creation, Note Editing, Note Deletions, Tagging System, User Authentication, Responsive Design. Custom API Backend with JWT Authentication",
      technologies: "HTML, CSS, React.js, JavaScript, Node.js, Express.js, MongoDB, RESTful API, JWT Authentication.",
      code: "https://github.com/ankushekapure/notes-keeper",
      live: "https://ankushekapure.github.io/notes-keeper"
    }
  }

  const projectChoosen = (choice) => {
    setselectedPro(projectDetails[choice]);
  }

  return (
    <div className='proContainer'>
      <div className='block1-pro'>
        <h2 className='waviy-pro'><span style={{ "--i": 1 }}>P</span>
          <span style={{ "--i": 2 }}>R</span>
          <span style={{ "--i": 3 }}>O</span>
          <span style={{ "--i": 4 }}>J</span>
          <span style={{ "--i": 5 }}>E</span>
          <span style={{ "--i": 6 }}>C</span>
          <span style={{ "--i": 7 }}>T</span>
          <span style={{ "--i": 8 }}>S</span>
        </h2>
        <div className='projects'>
          <div onClick={() => { projectChoosen("textTransformpro") }}>Text Transform Pro</div>
          <div onClick={() => { projectChoosen("newsly") }}>Newsly</div>
          <div onClick={() => { projectChoosen("notesKeeper") }}>Notes Keeper</div>
          <div onClick={() => { projectChoosen("chatApp") }}>Real Chat App</div>
        </div>
      </div>
      <div className="block2-pro">
        <ProjectItem title={selectedPro.title} overview={selectedPro.overview} features={selectedPro.features} technologies={selectedPro.technologies} code={selectedPro.code} live={selectedPro.live} />
      </div>
    </div>
  )
}

export default Projects