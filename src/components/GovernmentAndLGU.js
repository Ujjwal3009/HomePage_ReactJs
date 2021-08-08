import React from 'react'
import '../index.css'
import TelecomSolutionsVector from '../Assets/GovernmentAndLGUAssets/TelecomSolutionsVector@2x.png'
import GovernmentVector from '../Assets/GovernmentAndLGUAssets/GovernmentVector.svg'
import ERPVector from '../Assets/GovernmentAndLGUAssets/EnterpriseSolutions.svg'
import SystemsIntegrationVector from '../Assets/GovernmentAndLGUAssets/SytemIntegVector.svg'
import { Link } from 'react-scroll'


function GovernmentAndLGU() {
    const offset = -120;
    return (
        <div >
            <div className="GovernmentAndLGU" id="GovernmentAndLGUId">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="GovernmentAndLGU_Row1">WHAT WE DO</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col">
                            <h6 class="GovernmentAndLGU_Row2">
                                Python Solutions has a wide range of experience in developing world-class solutions. The technical experience of its people enables it to deliver a wide gamut of Information Technology products and services.
                            </h6>
                        </div>
                        <div class="col-1"></div>
                    </div>
                </div>
                <div class="GovernmentAndLGU_Row3">
                    <div class="GovernmentAndLGU_box"> 
                        <div 
                            class="GovernmentAndLGU_img"
                            style={{
                                backgroundImage: `url(${TelecomSolutionsVector})`,
                                backgroundSize: `100%`,
                                backgroundRepeat: `no-repeat`,
                            }} 
                        >
                            {/* text to show at hover */}
                            <div class="text-overlay">
                                <div class="text-container">
                                    <p>Please add description</p>
                                </div>
                                <div class="readMoreContainer">
                                    <Link to="TelcomSolutionsId" offset={offset}><p>Read more&#187;</p></Link> 
                                </div>
                            </div>
                            {/* text to show at hover */}
                        </div>
                        <div>
                            <h4 class="GovernmentAndLGU_text">TELECOM SOLUTIONS</h4>
                        </div>
                    </div>
                    <div class="GovernmentAndLGU_box"> 
                        <div 
                            class="GovernmentAndLGU_img"
                            style={{
                                backgroundImage: `url(${GovernmentVector})`,
                                backgroundSize: `100%`,
                                backgroundRepeat: `no-repeat`,
                            }}
                        >
                            {/* text to show at hover */}
                            <div class="text-overlay">
                                <div class="text-container">
                                    <p>Please add description</p>
                                </div>
                                <div class="readMoreContainer">
                                    <Link to="CompanyId" offset={offset}><p>Read more&#187;</p></Link> 
                                </div>
                            </div>
                            {/* text to show at hover */}
                        </div>
                        <div>
                            <h4 class="GovernmentAndLGU_text">GOVERNMENT AND LGU</h4>
                        </div>
                    </div>
                    <div class="GovernmentAndLGU_box">
                        <div 
                            class="GovernmentAndLGU_img"
                            style={{
                                backgroundImage: `url(${ERPVector})`,
                                backgroundSize: `100%`,
                                backgroundRepeat: `no-repeat`,
                            }}
                        >
                            {/* text to show at hover */}
                            <div class="text-overlay">
                                <div class="text-container">
                                    <p>Please add description</p>
                                </div>
                                <div class="readMoreContainer">
                                    <Link to="EnterpriseSolutionsId" offset={offset}><p>Read more&#187;</p></Link> 
                                </div>
                            </div>
                            {/* text to show at hover */}                            
                        </div>
                        <div>
                            <h4 class="GovernmentAndLGU_text">ENTERPRISE SOLUTIONS</h4>
                        </div>
                        
                    </div>
                    <div class="GovernmentAndLGU_box"> 
                        <div 
                            class="GovernmentAndLGU_img"
                            style={{
                                backgroundImage: `url(${SystemsIntegrationVector})`,
                                backgroundSize: `100%`,
                                backgroundRepeat: `no-repeat`,
                            }}
                        >
                            {/* text to show at hover */}
                            <div class="text-overlay">
                                <div class="text-container">
                                    <p>Please add description</p>
                                </div>
                                <div class="readMoreContainer">
                                    <Link to="SystemsIntegrationID" offset={offset}><p>Read more&#187;</p></Link> 
                                </div>
                            </div>
                            {/* text to show at hover */}                        
                        </div>
                        <div>
                            <h4 class="GovernmentAndLGU_text">SYSTEMS INTEGRATION</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GovernmentAndLGU
