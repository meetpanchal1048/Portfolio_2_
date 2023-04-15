import React from 'react'
import portfolio from './images/portfolio.png'
import techrec from './images/techrec.png'
import cal from './images/calculator.png'
import lorem from './images/lorem.png'

export const Projects = () => {
    return (
        <div>

            <div class="row">
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/MitPortfolio.github.io/'><img src={portfolio} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Portfolio 1.0</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                <a href='https://meetpanchal1048.github.io/TechRec.github.io/'><img src={techrec} class="card-img-top card-img-right" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">TechRec - Tech_Recommendation</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                <a href='https://meetpanchal1048.github.io/MIT_React_Calculator1.github.io/'><img src={cal} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Calculator</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML-CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                <a href='https://meetpanchal1048.github.io/MIT_JS_NoLorem.github.io/'><img src={lorem} class="card-img-top card-img-right" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">No Lorem Ipsum</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
