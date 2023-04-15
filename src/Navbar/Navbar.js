import React from 'react'
import './NavApp.css'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Mit.Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#skillss">Skills</a>
                            <a className="nav-link" aria-current="page" href="#projectss">Projects</a>
                            <a className="nav-link" href="#connect">Contacts</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
