import React from 'react'
import Logo from '../Assets/WelcomePageAssets/MixedAssets.svg'
import TextBG from '../Assets/WelcomePageAssets/TEXTBG.svg'
import '../index.css'

const WelcomePage = () => {
    return (
        <div >
            <div 
                className="WelcomePage" 
                id="WelcomePageId"
                class="outerText" 
                style={{
                    backgroundImage: `url(${TextBG})`,
                    backgroundPosition: `-200px 10px`,
                    backgroundSize: `1000px 250px`,
                    backgroundRepeat: `no-repeat`,

                }} 
            >
                <div class="container" >
                    <div class="row" class="ownRow">
                        <div class="col-1"></div>
                        <div class="col">
                            <h1 class="line1">WE TRANSFORM YOUR</h1>
                            <h1 class="line2">IDEAS TO REALITY</h1>
                            
                        </div>
                        <div class="col-4">
                            <img class="bulbLogo" src={Logo} alt="Logo" /> 
                        </div>
                        <div class="col-1"></div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default WelcomePage
