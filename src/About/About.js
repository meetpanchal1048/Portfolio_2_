import React from 'react'
import background from './Images/background.png'
import './AboutApp.css'
import html from './Images/HTML.jpg'
import bootstrap from './Images/Bootstrap.jpg'
import JavaScript from './Images/JS.jpg'
import react from './Images/React.jpg'
import exp from './Images/experience.png'
import resume from './Resume 11-4.pdf'


export const About = () => {
    return (
        <div>


            <div className="row" id='skillss'>
                <div class="image-back mb-2 mb-sm-0">
                    <img src={background} class="card-img-top background-img" alt="..." />
                    <img src={html} className='image html' />
                    <img src={bootstrap} className='image bootstrap' />
                    <img src={JavaScript} className='image javascript' />
                    <img src={react} className='image react' />
                    <div class="card-body" >
                        <h5 class="pro-title">More Skills</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">UI/UX</p>
                            <p class="pro-desc">Graphic Designing</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <img src={exp} class="card-img-top cards-img-right" alt="..." />
                    <div class="card-body">
                        <h5 class="pro-title">Experience</h5>
                        <div className="pro-desc-top">
                            <a href={resume} className='download' download><p class="pro-desc">Download Resume</p></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
