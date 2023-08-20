import React from 'react'
import './Plan.css'
import whiteTick from '../../../assets/whiteTick.png'
import { plansData } from './../../../data/plansData'

const Plan = () => {
    return (
        <div className="plans-container">
            <div className="blur plans_blur_1"></div>
            <div className="blur plans_blur_2"></div>

            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now withus</span>
            </div>

            {/* plans card  */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>₹ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benifits - </span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plan