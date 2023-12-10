import React from 'react';
import './Projects.css';

function ProjectItem(props) {
  return (
    <div className="proContent">
      <div className='proDetails'>

      <div className='proItems'>
          {props.code &&<div className='pro-links'>
            <a href={props.code} target="_blank" rel="noreferrer">Source Code</a>
          </div>}
          {props.live &&
            <div className='pro-links'>
              <a href={props.live} target="_blank" rel="noreferrer">See Demo</a>
            </div>
          }
        </div>
        <div className='proItems'>
          <div className='pro-label'>Project Title</div>
          <div className='pro-value'>{props.title}</div>
        </div>
        <div className='proItems'>
          <div className='pro-label'>Project Overview</div>
          <div className='pro-value'>{props.overview}</div>
        </div>
        <div className='proItems'>
          <div className='pro-label'>Features Implemented</div>
          <div className='pro-value'>{props.features}</div>
        </div>
        <div className='proItems'>
          <div className='pro-label'>Technologies Used</div>
          <div className='pro-value'>{props.technologies}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
