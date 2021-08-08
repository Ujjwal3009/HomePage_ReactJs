import React from 'react'
import SolutionsPNG from '../Assets/SolutionsPageAssets/SolutionsWeDeliver@2x.png'

function Solutions() {
    return (
        <div>
            <div className="Solutions" id="SolutionsId">
                <div className="SolutionsContainer"> 
                    <div >
                        <img class="Solutions_img" src={SolutionsPNG} alt="SolutionsPNG" />
                    </div>
                    <div class="SolutionsDivider1"> </div>
                    <div class="SolutionsDivider2"> </div>
                    <div class="Solutions_right">
                        <div>
                            <h1 class="Solutions_h1">SOLUTIONS WE DELIVER</h1>
                        </div>
                        <div>
                            <p class="Solutions_p">
                                Our combined strategy empowers technology transformation to solve complex business difficulties to support your organization as it initiates or undergoes a significant change. The main objective for technological transformation is always end-users. People need to use digital services to provide flexibility, freedom, and productivity, respecting the need to decrease operational investments.
                            </p>
                        </div>
                        <div>
                            <p class="Solutions_p">
                                Our capabilities traverse digital solution implementation services from strategy and architecture up to production deployment. We implement technology-enabled programs that satisfy your unprecedented challenges.
                            </p>
                        </div>

                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Solutions
