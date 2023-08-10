import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'> 
        <h5>Get to know</h5>
        <h2>About ME</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>2+ year working</small>
                    </article>

                    <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Company</h5>
                    <small>Tata Consultancy Service</small>
                   </article>

                    <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>5+ completed</small>
                    </article>
                    </div>
                        <p>
                        Experienced software developer skilled in developing and maintaining web applications with modern technologies. Collaborates with cross-functional teams to deliver high-quality software products within project timelines. Proactively incorporates the latest web development trends and emerging technologies to enhance development processes.
                            
                            </p>

                            <a href="#contact" className='btn btn-primary'>Let's talk</a>

                </div>

            </div>
        
        </section>
    )
}

export default About