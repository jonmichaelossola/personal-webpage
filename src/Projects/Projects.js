import React, { Component } from 'react';
import faceApp from './face-recoginzer-app.png';
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div className='Projects-component'>
                <h2 className='projects-header'>My Projects</h2>
                <div className='projects-container'>
                    <div className='project'>
                        <h5>Facial Recognition Web App</h5>
                        <a target='_blank' href='https://jonmichael-smart-brain.herokuapp.com/'>
                            <img className='project-image' src={faceApp} width='328' height='250'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;