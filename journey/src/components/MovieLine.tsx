import * as React from 'react';
import { Timeline, Consts } from './timeline';
import { Sprite } from './Sprite';
import { Context } from './context';

interface MovieLineState {
    screenWidth: number;
}

export class MovieLine extends React.Component<{}, MovieLineState> {
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
        let topSum = 0;
        // tslint:disable-next-line:no-console
        const screenWidth = window.screen.availWidth;
        const windowWidth = this.state.screenWidth;
        const showSprites = (windowWidth >= Consts.MinScreenSize);
        const errorMsg = windowWidth < 850 ? 'this website is best viewed on larger screens' : undefined;
        
        const scaleFactor = Math.max(0.35, windowWidth / 1000);
        let transform = undefined;
        let left = undefined;
        if (scaleFactor < 1) {
            Context.context.scaleFactor = 1 / scaleFactor;
            transform = `scale(${scaleFactor}`;
            if (windowWidth < 670) {
                left = -((1 - windowWidth / 670) * 300);
            }
        }

        // tslint:disable-next-line:no-console
        console.log(screenWidth, windowWidth, showSprites);
        return (
            <div className="roadContainer"  style={{transform: transform, left: left}}>
                <div 
                    className="road" 
                    style={{backgroundImage: `url(${require('../assets/bkg2.png')})`, backgroundRepeat: 'repeat-y'}}
                >
                    <img src={require('../assets/bkg-top.png')} className="clean" />
                </div>
                <div className="head-message">
                    <span>
                         <br/> 
                         Internet of Value is Here <br />
                         <br />
                        <small style={{fontSize: 16}}>
                            {showSprites ? 'scroll for more' : null} <br />
                         </small><br /> 
                        {errorMsg}
                    </span>
                </div>

                {showSprites ?
                    Timeline.map((t, i) => { 
                        topSum += t.pos; return <Sprite key={i} asset={{...t, pos: topSum}} />; }) :
                    null
                }
            </div>
        );
    }
}