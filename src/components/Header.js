import React from 'react'
import Logo from '../Assets/HeadersPageAssets/Logo.png'
import '../index.css'
import Button from './Button'
import { Link } from 'react-scroll'


const Header = () => {
    const offset = -120;
    return (
        <header class="container-lr" class="sticky" >
            <div class="row">
                <div class="col-1">    </div>
                <div class="col-3">
                    <Link to="WelcomePageId" spy={true} offset={offset}><img class="Logo" src={Logo} alt="Logo" /></Link>
                </div>
                <div class="col-4">
                    <nav className="navbar bg-white container">
                        <h6 class="dropdown">
                            <Link to="SolutionsId" offset={offset}>SOLUTIONS &#709;</Link>
                            <div class="dropdown-content">
                                <Link class="dropdown-item" to="TelcomSolutionsId" offset={offset}>Telecom Solutions</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="EnterpriseSolutionsId" offset={offset}>Enterprise Solutions</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="GovernmentAndLGUId" offset={offset}>Government & LGU</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="SystemsIntegrationID" offset={offset}>Systems Integration</Link>
                            </div>

                        </h6>
                        <h6><Link to="PartnersId" offset={offset}>PARTNERS</Link></h6>
                        <h6><Link to="CompanyId" offset={offset}>COMPANY</Link></h6>
                        <h6><Link to="ContactUsId" offset={offset}>CONTACT US</Link></h6>
                    </nav>
                </div>
                <div class="col">
                    <Button text="DEMO" Class="demo"/>
                    <Button text="PARTNER LOGIN" Class="partnerLogin" />
                </div>
                
                
               
            </div>
        </header>
    )
}

export default Header




// components could be a class or a function