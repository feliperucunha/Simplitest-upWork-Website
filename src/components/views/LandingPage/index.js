import React from 'react';
import './styles.css';
import Logo from '../../static/imgs/logo.svg';
import Landing from '../../static/imgs/landing3.png';



function LandingPage() {
    return (
        <div className="LandingPage">
            <div id="top-bar">
                {/*top bar*/}
                <nav>
                    <img src={Logo} alt="easybank" />
                    <div id="links">
                        {/*links*/}
                        <a className="home" href="/"> Home </a>
                        <a href="/"> About </a>
                        <a href="/"> Contact </a>
                        <a href="/"> Careers </a>
                    </div>
                    {/* end links */}
                    <button className="request" href="/">Request invite</button>
                    <button href="/">Sign In</button>
                </nav>
            </div>
                {/*end top bar*/}
            <div id="image">
                <img src={Landing} alt="landing" />
                <h1>
                    Next generation <br />
                    digital banking
                </h1>
                <p>
                    Take your financial life online. Your Easybank account <br />
                    will be a one-step-shop for spending, saving. <br />
                    budgenting, investing, and much more.
                </p>
                <button className="request" href="/">Request invite</button>
            </div>
        </div>
 );
}

export default LandingPage;