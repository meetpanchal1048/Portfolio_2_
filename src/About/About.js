import React from 'react'
import background from './Images/background.png'
import './AboutApp.css'
import html from './Images/HTML.jpg'
import bootstrap from './Images/Bootstrap.jpg'
import JavaScript from './Images/JS.jpg'
import react from './Images/React.jpg'
import exp from './Images/experience.png'
import reactnatv from './Images/React Native.png'
import tailwind from './Images/tailwind.png'
import reactjscor from './Images/React Cour.png'
import reactntvcour from './Images/React Native Cour.png'
import jscour from './Images/Javascript Cour.png'
import ibm from './Images/IBM.png'
import resume from './Resume-09.pdf'


export const About = () => {
    return (
        <div>


            <div className="row">
                <div className="image-back mb-2 mb-sm-0">
                    <img src={background} className="card-img-top background-img" alt="..." />
                    <img src={html} className='image html' />
                    <img src={bootstrap} className='image bootstrap' />
                    <img src={tailwind} className='image tailwind' />
                    <img src={JavaScript} className='image javascript' />
                    <img src={react} className='image react' />
                    <img src={reactnatv} className='image reactntv' />
                    <div className="card-body" >
                        <h5 className="pro-title">More Skills</h5>
                        <div className="pro-desc-top">
                            <p className="pro-desc">UI/UX</p>
                            <p className="pro-desc">Graphic Designing</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-2 mb-sm-0">
                    <img src={exp} className="card-img-top cards-img-right" alt="..." />
                    <div className="card-body">
                        <h5 className="pro-title">Experience</h5>
                        <div className="pro-desc-top">
                            <a href={resume} className='download' download><p className="pro-desc">Download Resume</p></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card project-header certificate">
                        <h2 className='text-light selected'>Certificate's</h2>
                    </div>
                </div>
                <div className="row row1">
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <a href='https://coursera.org/share/bf3b92c5477173d9a77bb5a0052bc1c0'><img src={jscour} className="card-img-top card-img-right" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="pro-title">Programming with JavaScript by Meta</h5>
                            <div className="pro-desc-top">
                                <p className="pro-desc">JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <a href='https://coursera.org/share/96deac3531ffc5323d6399df144c23b0'><img src={reactjscor} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="pro-title">React Basics by Meta</h5>
                            <div className="pro-desc-top">
                                <p className="pro-desc">React JS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <a href='https://coursera.org/share/341fd7d8bed4d2beed2cee1145772dc5'><img src={reactntvcour} className="card-img-top card-img-right" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="pro-title">React Native by Meta</h5>
                            <div className="pro-desc-top">
                                <p className="pro-desc">React Native</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <a href='https://skills.yourlearning.ibm.com/certificate/share/730f3fd6d8ewogICJsZWFybmVyQ05VTSIgOiAiMTUwMzM1MFJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIlBMQU4tODc0OUMwMkE3OEVDIgp98e0b7ab169-10'><img src={ibm} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="pro-title">Web Development Fundamentals by IBM</h5>
                            <div className="pro-desc-top">
                                <p className="pro-desc">JavaScript</p>
                                <p className="pro-desc">React Js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
