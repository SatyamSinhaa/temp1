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
import mobile from '../../assests/mobile.jpg'
import scientist from '../../assests/scientist.jpg'
import robot from '../../assests/robot.jpg'
import interactive from '../../assests/interactive.png'
import brain from '../../assests/brain.png'
import data from '../../assests/data.png'
import DynamicCounter from '../../components/DynamicCounter'
import map from '../../assests/map.jpg'
import payment from '../../assests/payment.jpg'
import invester from '../../assests/invester.jpg'
import client from '../../assests/client.jpg'
import peoples from '../../assests/people.jpg'
import lti from '../../assests/lti.png'

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

    const serviceCards = [
        {
            image: mobile,
            inon: interactive,
            head: 'Interactive',
            para: 'LTIMindtree is a leader in curating engaging and immersive experiences tailored for global brands. Our forte lies in building outcome-driven experiences for customers, partners, and employees, leveraging omni-channel journeys to increase reach, enhance engagement, and drive sales.'
        },
        {
            image: scientist,
            inon: data,
            head: 'DATA AND ANALYTICS',
            para: 'Enterprises today understand the indispensable role of data and analytics in driving transformations. LTIMindtree is disrupting this space by re-imagining core processes to drive speed, efficiency, compliance, and outcomes at scale.'
        },
        {
            image: robot,
            inon: brain,
            head: 'ENTERPRISE AI',
            para: 'AI is the future, and LTIMindtree’s Enterprise AI practice is helping enterprises across the globe get to the future, faster. Together.'
        },
    ]

    const stakeholdersCards = [
        {
            image: invester,
            head: 'Investors',
            p1: 'Delivering greater than average return on investments through dividends and share value appreciation.',
            num: 'USD 5.64 Billion',
            p2: 'ORDER BOOK VALUE',
        },
        {
            image: client,
            head: 'Clients',
            p1: 'Helping clients meet theirdigital transformation requirements through robust delivery',
            num: '5.85',
            p2: 'CUSTOMER SATISFACTION RATING',
        },
        {
            image: peoples,
            head: 'People',
            p1: 'We provide our employees a safe, inclusive, and nurturingworkplace, and invest their training, education, and well-being, fostering both personal and professional growth',
            num: '6.5 Days',
            p2: 'AVERAGE LEARNING PER EMPLOYEE',
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
                <div>
                    <h3>LTIMINDTREE JOURNEY</h3>
                    <h1>DRIVING GROWTH AND EFFICIENCY THROUGH MERGER SYNERGY</h1>
                </div>
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
                            <h2>USD 1.4 Billion</h2>
                            <p>REVENUE</p>
                        </section>
                    </div>
                    <div className='cont-div'>
                        <div className='cont-div'>
                            <img src={people} />
                            <section>
                                <h2><DynamicCounter limit={700} />+</h2>
                                <p>CLIENTS</p>
                            </section>
                        </div>
                        <div className='cont-div last'>
                            <img src={location} />
                            <section>
                                <h2><DynamicCounter limit={38} /></h2>
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

            <div className='service'>
                <div className='head'>
                    <h4>SERVICE OFFERINGS</h4>
                    <h1>ACCELERATING DIGITAL TRANSFORMATION</h1>
                </div>
                <div className='box'>
                    {
                        serviceCards.map((card, index) => (
                            <div key={index}>
                                <img src={card.image} className='image' /><br />
                                <div className='topic'>
                                    <img src={card.inon} />
                                    <h4>{card.head}</h4>
                                </div>
                                <p>{card.para}</p>
                                <button>Read More</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <section className='blue-back'>
                <center>
                    <h5>GLOBAL FOOTPRINT</h5>
                    <h1>OPERATING SEAMLESSLY</h1>
                    <h1>ACROSS GEOGRAPHIES</h1>
                </center>

                <div className='blue-back-flex'>
                    <div className='numbers'>
                        <h1><DynamicCounter limit={117} /></h1>
                        <p>NO. OF OFFICES</p> <hr />

                        <h1><DynamicCounter limit={38} /></h1>
                        <p>NO. OF COUNTRIES</p> <hr />

                        <h1><DynamicCounter limit={39} /></h1>
                        <p>NO. OF NATIONAL LOCATIONS</p> <hr />

                        <h1><DynamicCounter limit={78} /></h1>
                        <p>NO. OF INTERNATIONAL LOCATIONS</p> <hr />
                    </div>
                    <img src={map} className='map' />
                </div>
                <center><button>Read More</button></center>

                <div className='blue-back-flex2'>
                    <div>
                        <h4>INDUSTRIES SERVED</h4>
                        <h1> FOCUSING ON VERTICAL</h1>
                        <h1>APPROACH TO GROW OUR</h1>
                        <h1>BUSINESS</h1>
                        <button>Read More</button> <br />
                        <img src={payment} />
                    </div>
                    <div>
                        <h4>REVENUE DISTRIBUTION
                            BY INDUSTRY</h4>
                        <span className='lblue'></span>Banking, Financial Services & Insurance <br /><br />
                        <span className='yellow'></span>Technology, Media & Communication <br /><br />
                        <span className='dblue'></span>Manufacturing & Resources <br /><br />
                        <span className='orange'></span>Conumer Business <br /><br />
                        <span className='gray'></span>Healthcare, Life Sciences & Public Services
                    </div>
                </div>
            </section>

            <div className='stakeholders'>
                <div className='heading'>
                    <h4>VALUE CREATED FOR STAKEHOLDERS</h4>
                    <h1>GENERATING POSITIVE</h1>
                    <h1>OUTCOMES FOR EVERYONE</h1>
                </div>
                <div className='cards'>
                    {
                        stakeholdersCards.map((card, index) => (
                            <div key={index}>
                                <img src={card.image} />
                                <h4>{card.head}</h4>
                                <p>{card.p1}</p>
                                <h1>{card.num}</h1>
                                <p>{card.p2}</p>
                                <button>Read More</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='approach'>
                <section>
                    <span><h1>OUR APPROACH TO VALUE CREATION</h1></span>
                    <div>
                        <h5>STAKEHOLDER ENGAGEMENT</h5>
                        <h4>STAYING COMMITTED TO GROW TOGETHER</h4>
                        <button>Read More</button>
                    </div>
                </section>
                <section>
                    <div>
                        <h5>BUSINESS MODEL</h5>
                        <h4>HARNESSING STRENGTHS TO ACHIEVE SUSTAINED VALUE </h4>
                        <button>Read More</button>
                    </div>
                    <div>
                        <h5>MATERIALITY</h5>
                        <h4>DETERMINING WHAT IS RELEVANT TO OUR STAKEHOLDERS</h4>
                        <button>Read More</button>
                    </div>
                </section>
                <section>
                    <div>
                        <h5>OPERATING CONTEXT</h5>
                        <h4>SEIZING GROWTH OPPORTUNITIES</h4>
                        <button>Read More</button>
                    </div>
                    <div>
                        <h5>RISK MANAGEMENT</h5>
                        <h4>SAFEGUARDING AGAINST UNCERTAINTIES </h4>
                        <button>Read More</button>
                    </div>
                </section>
            </div>

            <div className='download'>
                <center><h1>DOWNLOAD CENTRE</h1></center>
                <div className='download-flex'>
                    <img src={lti} />
                    <section>
                        <div>
                            <h4>Awards & Recognitions</h4>
                            <button>Download</button>
                        </div>
                        <div>
                            <h4>Business Responsibility and Sustainability Report</h4>
                            <button>Download</button>
                        </div>
                        <div>
                            <h4>Financial Statements</h4>
                            <button>Download</button>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h4>Management Discussion and Analysis</h4>
                            <button>Download</button>
                        </div>
                        <div>
                            <h4>Management Discussion and Analysis</h4>
                            <button>Download</button>
                        </div>
                        <div>
                            <h4>Notice of AGM</h4>
                            <button>Download</button>
                        </div>
                    </section>
                </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home