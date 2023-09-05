import React, { useState } from 'react'
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/javascript.png";
import reactImg from "../images/react.png";
import nodeImg from "../images/node.png";
import mongoImg from "../images/mongoDB.png";
import seoImg from "../images/seo.png";
import gitImg from "../images/git.png";
import './Skills.css'

function Skills() {
  const [skillInfo, setskillInfo] = useState(null)
  const showSkillInfo = (skill) => {
    if (skill === "html") {
      setskillInfo("With a keen eye for detail, I take pride in crafting HTML documents that form the foundation of exceptional web experiences. Whether it's designing responsive layouts, optimizing for search engines, or ensuring cross-browser compatibility, I prioritize the use of HTML best practices to create visually appealing and efficient web content. I'm excited to collaborate on projects that require HTML expertise and contribute to building web solutions that exceed expectations.")
    }
    if (skill === "css") {
      setskillInfo("My CSS skills encompass creating captivating user interfaces, applying intricate styling, and ensuring that web pages look polished and professional. I pay close attention to detail, embracing the latest CSS techniques to deliver seamless user experiences. I'm eager to collaborate on projects that demand CSS expertise and contribute to making web designs not only aesthetically pleasing but also highly functional and user-centric.")
    }
    if (skill === "js") {
      setskillInfo("JavaScript is my playground for creating interactive and dynamic web experiences. I leverage its power to enhance user interactions, perform data manipulations, and make web applications come to life.")
    }
    if (skill === "react") {
      setskillInfo("I'm well-versed in React, a popular JavaScript library for building modern, scalable, and maintainable user interfaces. I have experience in creating React applications that provide a seamless user experience.")
    }
    if (skill === "node") {
      setskillInfo("While my expertise in Node.js is at a basic level, I'm enthusiastic about its capabilities and eager to further explore its potential in web development. My knowledge of Node.js enables me to work with server-side scripting and manage dependencies using tools like npm. I am excited to continue learning and growing in this area, as Node.js plays a crucial role in the modern web development landscape.")
    }
    if (skill === "mongo") {
      setskillInfo("MongoDB is a NoSQL database that allows me to store and manage data in flexible, schema-less formats. While my knowledge of MongoDB is at a basic level, I recognize its importance in modern web development and am eager to delve deeper into its capabilities. My familiarity with MongoDB includes creating databases, collections, and performing basic CRUD (Create, Read, Update, Delete) operations. I understand its role in data storage and retrieval, making it a valuable tool for applications that require scalable and efficient data management. I'm excited to further develop my MongoDB skills and contribute to projects that leverage its strengths in data handling and storage.")
    }
    if (skill === "git") {
      setskillInfo("Collaboration and version control are crucial in modern development. I use Git to manage code repositories, ensuring smooth teamwork and efficient tracking of changes.")
    }
    if (skill === "seo") {
      setskillInfo("I have a basic understanding of SEO principles, allowing me to create web content that is optimized for search engines, improving online visibility and accessibility.")
    }
  }
  return (
    <>
      <div className='skillsContainer'>
        <div className="block1">
          <h2 id='myskills'>MY SKILLS</h2>
          <div className="skills">
            <div onMouseOver={() => { showSkillInfo("html") }} className='singleSkill'>
              <img src={htmlImg} alt="html" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>H</span>
                <span style={{ "--i": 2 }}>T</span>
                <span style={{ "--i": 3 }}>M</span>
                <span style={{ "--i": 4 }}>L</span>
              </h3>
            </div>
            <div onMouseOver={() => { showSkillInfo("css") }} className="singleSkill">
              <img src={cssImg} alt="css" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>C</span>
                <span style={{ "--i": 2 }}>S</span>
                <span style={{ "--i": 3 }}>S</span>
              </h3>
            </div>
            <div onMouseOver={() => { showSkillInfo("js") }} className="singleSkill">
              <img src={jsImg} alt="javascript" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>J</span>
                <span style={{ "--i": 2 }}>A</span>
                <span style={{ "--i": 3 }}>V</span>
                <span style={{ "--i": 4 }}>A</span>
                <span style={{ "--i": 5 }}>S</span>
                <span style={{ "--i": 6 }}>C</span>
                <span style={{ "--i": 7 }}>R</span>
                <span style={{ "--i": 8 }}>I</span>
                <span style={{ "--i": 9 }}>P</span>
                <span style={{ "--i": 10 }}>T</span>
              </h3>

            </div>
            <div onMouseOver={() => { showSkillInfo("react") }} className="singleSkill">
              <img src={reactImg} alt="react js" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>R</span>
                <span style={{ "--i": 2 }}>E</span>
                <span style={{ "--i": 3 }}>A</span>
                <span style={{ "--i": 4 }}>C</span>
                <span style={{ "--i": 5 }}>T</span>
                <span style={{ "--i": 6 }}>J</span>
                <span style={{ "--i": 7 }}>S</span>
              </h3>

            </div>
            <div onMouseOver={() => { showSkillInfo("node") }} className="singleSkill">
              <img src={nodeImg} alt="node js" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>D</span>
                <span style={{ "--i": 4 }}>E</span>
                <span style={{ "--i": 5 }}>J</span>
                <span style={{ "--i": 6 }}>S</span>
              </h3>

            </div>
            <div onMouseOver={() => { showSkillInfo("mongo") }} className="singleSkill">
              <img src={mongoImg} alt="mongo DB" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>M</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>N</span>
                <span style={{ "--i": 4 }}>G</span>
                <span style={{ "--i": 5 }}>O</span>
                <span style={{ "--i": 6 }}>D</span>
                <span style={{ "--i": 7 }}>B</span>
              </h3>

            </div>
            <div onMouseOver={() => { showSkillInfo("seo") }} className="singleSkill">
              <img src={seoImg} alt="seo" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>S</span>
                <span style={{ "--i": 2 }}>E</span>
                <span style={{ "--i": 3 }}>O</span>
              </h3>

            </div>
            <div onMouseOver={() => { showSkillInfo("git") }} className="singleSkill">
              <img src={gitImg} alt="git" />
              <h3 className='waviy skillName'>
                <span style={{ "--i": 1 }}>G</span>
                <span style={{ "--i": 2 }}>I</span>
                <span style={{ "--i": 3 }}>T</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="block2">
          <div className="skillInfo">
            {skillInfo}
          </div>
        </div>
      </div>

    </>
  )
}

export default Skills