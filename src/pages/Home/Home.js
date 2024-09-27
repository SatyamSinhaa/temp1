import React from 'react'
import './Home.css'
import cube from '../../assests/cube.svg'
import circle from '../../assests/circle.svg'
import kart from '../../assests/kart.svg'
import atom from '../../assests/atom.svg'
import shield from '../../assests/shield.svg'
import perosn from '../../assests/person.png'
import handShake from '../../assests/hand shake.svg'
import people from '../../assests/people.svg'
import location from '../../assests/location.svg'
import target from '../../assests/target.svg'
import heart from '../../assests/heart.svg'
import spark from '../../assests/spark.svg'
import graph from '../../assests/graph.svg'


const Home = () => {

    const journeyCards = [
        {
            icon: cube,
            cont: 'DRIVING GROWTH THROUGH CROSS-SELLING',
        },
        {
            icon: circle,
            cont: 'TALENT UTILIZATION',
        },
        {
            icon: kart,
            cont: 'ENHANCED PURCHASING POWER',
        },
        {
            icon: atom,
            cont: 'GLOBAL REACH',
        },
        {
            icon: shield,
            cont: 'OPERATIONAL EXCELLENCE AND SIMPLIFICATION',
        },
    ]

    return (
        <div className='home'>
            <div className='our'>
                <h2>OUR VISION FOR A</h2>
                <h1>LIMITLESS FUTURE.</h1>
                <h2>FASTER. TOGETHER.</h2>
            </div>

            <div className='integrated'>
                <h1>Integrated Annual Report</h1>
                <h2>2023 - 24</h2>
            </div>

            <div className='lti'>
                <p>At LTIMindtree, we are forever excited about helping create
                    the future – one where endless possibilities are realized
                    through transformative digital technologies that collapse
                    distances, merge realms, and meaningfully improve lives. In
                    fact, by accelerating the wider adoption of these technologies
                    across businesses, communities, and geographies, we have
                    generated and sustained the momentum for a faster transition to the next.</p>
                <button>Read More</button>
            </div>

            <div className='journey'>
                <h3>LTIMINDTREE JOURNEY</h3>
                <h1>DRIVING GROWTH AND</h1>
                <h1>EFFICIENCY THROUGH</h1>
                <h1>MERGER SYNERGY</h1>
                <p>The strategic merger of LTI and Mindtree has brought opportunities for the combined organization. LTIMindtree is leveraging the complementary strengths of the two companies to drive revenue growth and has already achieved operational excellence by simplifying and optimizing internal processes, IT systems, and policies as a part of this merger.</p>
            </div>

            <div className='journey-cards'>
                {
                    journeyCards.map((card, index) => (
                        <div key={index} >
                            <img src={card.icon} />
                            <h4>{card.cont}</h4>
                        </div>
                    ))
                }
            </div>

            <div className='chairman'>
                <img src={perosn} />
                <div>
                    <h1>CHAIRMAN’S MESSAGE</h1>
                    <p>In this age of technology disruption, LTIMindtree comes with a forward-looking approach that embraces current and emerging technologies. Our 81,000+ team of enthusiastic individuals is driven by curiosity and a desire to explore new horizons."</p>
                    <h3>A.M. NAIK</h3>
                    <h4>Founder Chairman</h4>
                    <button>Read the complete message</button>
                </div>
            </div>

            <div className='opportunity'>
                <div className='image'>
                    <h3>WHO WE ARE</h3>
                    <h1>UNLOCKING NEW OPPORTUNITIES</h1>
                    <p>As one of the world’s leading technology consulting and digital solutions enterprise, LTIMindtree enables businesses across diverse sectors to harness the power of digital technology to deal with complex business challenges, innovate at scale and drive tangible business outcomes.</p>
                    <button>Read More</button>
                </div>
                <div className='content'>
                    <h4>FY24 OPERATIONAL FACTS</h4>
                    <div className='cont-div'>
                        <img src={handShake} />
                        <section>
                            <h2>USD 4.3 Billion</h2>
                            <p>REVENUE</p>
                        </section>
                    </div>
                    <div className='cont-div'>
                        <div className='cont-div'>
                            <img src={people} />
                            <section>
                                <h2>700+</h2>
                                <p>CLIENTS</p>
                            </section>
                        </div>
                        <div className='cont-div last'>
                            <img src={location} />
                            <section>
                                <h2>38</h2>
                                <p>COUNTRIES ACROSS <br /> 5 CONTINENTS</p>
                            </section>
                        </div>
                    </div>

                    <div className='points'>
                        <div>
                            <section>
                                <hr />
                                <span>PURPOSE</span>
                                <p>Solve to unleash possibilities</p>
                            </section>
                            <section>
                                <hr />
                                <span>VISION</span>
                                <p>Enabling businesses and communities to flourish in a hyperconnected world</p>
                            </section>
                        </div>
                        <div>
                            <section>
                                <hr />
                                <span>CORE VALUES</span>
                                <div>
                                    <img src={target} />
                                    <p>Be driven by purpose</p>
                                </div>

                                <div>
                                    <img src={heart} />
                                    <p>Act with compassion</p>

                                </div>
                                <div>
                                    <img src={spark} />
                                    <p>Be future-ready</p>
                                </div>

                                <div>
                                    <img src={graph} />
                                    <p>Deliver impact</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home