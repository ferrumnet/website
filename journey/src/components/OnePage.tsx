import * as React from 'react';
import { Context } from './context';
import { Consts } from './timeline';

const MetalImage = (props: {}) => {
    return (
        <div className="top-bkg">
        &nbsp;
        </div>
    );
};

const HeadBar = (props: {}) => (
    <div className="item active" id="page-top">
    <div className="container">
        <div style={{paddingTop: 400}}>
            <div className="margin-b-40" style={{textAlign: 'center'}}>
                <h1 className="carousel-title" style={{fontFamily: 'Verdana'}}>FERRUM</h1>
                <p className="top-sub-header"><span>Future of cryptocurrencies we were promised</span></p>
            </div>
        </div>
    </div>
    </div>);

interface ScalableProps {
    scaleFactor: number;
}

const Footer = (props: ScalableProps) => (
    <footer 
        id="page-footer"
        className="footer"
        style={{ position: 'relative', top: 17100 * props.scaleFactor + 200, padding: 30 }}
    >
    <div className="footer-seperator">
        <div className="content-lg container">
            <div className="row">
                <div className="col-sm-12 hsm-margin-b-50">
                    <a href="https://www.ferrumnet.org" style={{fontSize: 28}}>
                        BACK TO THE WEBSITE
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
            <div style={{backgroundColor: 'black'}}>
                <MetalImage />

                <HeadBar 
                />

                {this.props.children}

                <Footer
                    scaleFactor={scaleFactor}
                />
            </div>
        );
    }
}
