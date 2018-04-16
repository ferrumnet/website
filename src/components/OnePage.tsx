import * as React from 'react';
import { Context } from './context';
import { Consts } from './timeline';

interface NavBarProps {
    title: string;
}

const NavBar = (props: NavBarProps) => (
    // <!--========== HEADER ==========-->
    <header className="header navbar-fixed-top">
        {/* <!-- Navbar --> */}
        <nav className="navbar" role="navigation">
            <div className="container">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="menu-container">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="toggle-icon" />
                    </button>

                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <a className="logo-wrap" href="index.html">
                            <img className="logo-img logo-img-main" src="img/logo.png" alt="Asentus Logo" />
                            <img className="logo-img logo-img-active" src="img/logo-dark.png" alt="Asentus Logo" />
                        </a>
                    </div>
                    {/* <!-- End Logo --> */}
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse nav-collapse">
                    <div className="menu-container">
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item">
                                <a className="nav-item-child nav-item-hover active" href="#page-top">Home</a></li>
                            <li className="nav-item">
                                <a className="nav-item-child nav-item-hover" href="#page-ferrum">What is Ferrum</a></li>
                            <li className="nav-item">
                                <a className="nav-item-child nav-item-hover" href="https://github.com/ferrumnet">
                                    Github</a></li>
                            <li className="nav-item">
                                <a 
                                    className="nav-item-child nav-item-hover" 
                                    href="https://github.com/ferrumnet/yellowpaper/blob/master/YELLOWPAPER.md"
                                >Yellow Paper
                                </a></li>
                            <li className="nav-item">
                                <a className="nav-item-child nav-item-hover" href="#page-footer">Contact</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- End Navbar Collapse --> */}
            </div>
        </nav>
        {/* <!-- Navbar --> */}
    </header>
);

const MetalImage = (props: {}) => {
    return (
        <img className="img-responsive top-bkg" src="img/bkg.jpg" alt="Slider Image" />
    );
};

const HeadBar = (props: {}) => (
    <div className="item active" id="page-top">
    <div className="container">
        <div style={{paddingTop: 400}}>
            <div className="margin-b-40" style={{textAlign: 'left'}}>
                <h1 className="carousel-title" style={{fontFamily: 'Verdana'}}>FERRUM</h1>
                <p className="top-sub-header"><span>Future of cryptocurrencies we were promised</span></p>
            </div>
        </div>
    </div>
    </div>);

interface ScalableProps {
    scaleFactor: number;
}

const WhatIsFerrum = (props: ScalableProps) => (
    <div id="page-ferrum" style={{position: 'relative', top: 17100 * props.scaleFactor}}>
        <MetalImage />
                <div  className="container" style={{zIndex: 10, paddingTop: 300}}>
                    <div className="">
                        <div className="margin-b-40" style={{textAlign: 'left'}}>
                            <h1 className="carousel-title" style={{fontFamily: 'Verdana'}}>WHAT IS FERRUM?</h1>
                            <p className="top-sub-header" style={{lineHeight: 1.6 * props.scaleFactor}}>
                                <span style={{fontSize: 28 * props.scaleFactor}}>
                                    Ferrum is a peer-to-peer graph to exchange and transact most crypto-currencies 
                                    with NO fee or counterparty risk. Ferrum is a decentralized, and distributed 
                                    ledger technology with built-in support to read across chains. 
                                    This means Ferrum is able to represent almost any crypto-currency and allow them 
                                    to be exchanged and transacted in the Ferrum network. Bitcoin is expensive and 
                                    slow to trade, in Ferrum network Bitcoin can be traded or exchanged fast, and 
                                    without any fees.
                                </span></p>
                            <a href="#" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">READ MORE</a>
                        </div>
                    </div>
                </div>
    </div>
);

const CompareWithTraditional = (props: ScalableProps) => (
    <div 
        className="bg-color-sky-light" 
        data-auto-height="true" 
        style={{position: 'relative', top: 17100 * props.scaleFactor}}
    >
        <h1>Centralized versus Decentralized </h1>
        <div className="content-lg container">
            <div className="row row-space-1 margin-b-2">
                <div className="col-sm-6 sm-margin-b-2">
                    <div >
                    <div className="service" style={{height: 400}}>
                            <div>
                                <img src="img/app.png" width="150" />
                                <h3>Exchange controls the funds</h3>
                                <h3>Prone to hack</h3>
                                <h3>Tooling limited by exchange</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div >
                        <div className="service" style={{height: 400}}>
                            <div >
                                <img src="img/dapp.png" width="150" />
                                <h3>Only user controls the funds</h3>
                                <h3>Can NOT be hacked</h3>
                                <h3>Open community tooling</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const CompareWithAtomic = (props: ScalableProps) => (
    <div 
        className="bg-color-sky-light" 
        data-auto-height="true" 
        style={{position: 'relative', top: 17100 * props.scaleFactor, padding: 30}}
    >
        <h1> Why not Atomic Swap </h1>
        <h4>Atomic Swap allows direct exchange between different networks. <br />
            It is an interesting technology, but it has some serious limitations
        </h4>
        <div className="content-lg container">
            <div className="row row-space-1 margin-b-2">
                <div className="col-sm-6 sm-margin-b-2">
                    <div >
                    <div className="service" style={{height: 400}}>
                            <div>
                                <h1>Ferrum</h1>
                                <h3>Almost instant transactions</h3>
                                <h3>No fee <br /></h3>
                                <h3>Can be used for a network without smart contract support</h3>
                                <h3>Can represents other networks</h3>
                                <h3>Exchange with fiat currencies</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div >
                        <div className="service" style={{height: 400}}>
                            <div >
                                <h1>Atomic Swap</h1>
                                <h3>Transaction only as fast as the slowest network</h3>
                                <h3>One fee per network in swap</h3>
                                <h3>Requires smart contracts</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Footer = (props: ScalableProps) => (
    <footer 
        id="page-footer"
        className="footer"
        style={{
            position: 'relative', top: 17100 * props.scaleFactor, padding: 30, 
            backgroundImage: `url('img/bkg.jpg')`, backgroundRepeat: 'repeat-y'}}
    >
    <div className="footer-seperator">
        <div className="content-lg container">
            <div className="row">
                <div className="col-sm-6 hsm-margin-b-50">
                    <ul className="list-unstyled footer-list">
                        <li className="footer-list-item"><a className="footer-list-link" href="#">Home</a></li>
                        <li className="footer-list-item"><a className="footer-list-link" href="#">Terms</a></li>
                    </ul>
                </div>
                <div className="col-sm-5 sm-margin-b-30">
                    <h2 className="color-white">Request a demo <br /> of testnet</h2>
                    <a 
                        className="btn-theme btn-theme-sm btn-base-bg text-uppercase" 
                        href="mailto:info@ferrumnet.org"
                    >Send Email
                    </a>
                </div>
            </div>
        </div>
    </div>
    </footer>);

interface OnePageState {
    screenWidth: number;
}

export class OnePage extends React.Component<{}, OnePageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            screenWidth: window.innerWidth,
        };

        window.onresize = e => {
            this.setState({...this.state, screenWidth: window.innerWidth});
        };
    }

    render() {
        // tslint:disable-next-line:no-console
        const screenWidth = window.screen.availWidth;
        const windowWidth = this.state.screenWidth;
        const showSprites = (windowWidth >= Consts.MinScreenSize);
        
        const scaleFactor = Math.min(1, Math.max(0.35, windowWidth / 1000));
        if (scaleFactor < 1) {
            Context.context.scaleFactor = 1 / scaleFactor;
        }

        // tslint:disable-next-line:no-console
        console.log(screenWidth, windowWidth, showSprites, scaleFactor);
        return (
            <div >
                <NavBar 
                    title=""
                />
                <MetalImage />

                <HeadBar 
                />

                {this.props.children}

                <WhatIsFerrum 
                    scaleFactor={scaleFactor}
                />

                <CompareWithTraditional
                    scaleFactor={scaleFactor}
                />

                <CompareWithAtomic
                    scaleFactor={scaleFactor}
                />

                <Footer
                    scaleFactor={scaleFactor}
                />
            </div>
        );
    }
}
