import * as React from 'react';

export interface Asset {
    type: 'circle' | 'wide-circle' | 'bubble' | 'car' | 'miniman';
    pos: number;
    img: string;
    text?: React.ReactNode;
    longText?: boolean;
    attach: 'left' | 'right' | 'float';
    render?: () => React.ReactNode;
    size?: [number, number];
}

export namespace Consts {
    export const Block = 200;
    export const LeftAssetLeft = -70;
    export const RightAssetLeft = 680;
    export const SpriteTop = 560;
    export const ScrollSize = 400;
    export const MinimanScrollSize = 150;
    export const BubbleOffset = 200;
    export const BubblerRightOffset = 50;
    export const BubbleSize = 217;
    export const BubbleYOffset = 50;
    export const MiddleOffset = 300;
    export const AssetSize = {
        'circle': [175, 350],
        'car': [250, 250],
        'miniman': [60, 60],
    };
    export const MinScreenSize = 320;
}

export const Timeline: Asset[] = [
    {
        type: 'circle',
        img: 'man1',
        pos: 3,
        text: (<span>Hello!<br/>Let me take you to the Ferrum journey</span>),
        attach: 'left',
    },
    {
        type: 'circle',
        img: 'apt1',
        pos: 3,
        text: <span>We were promised a future...<br/> and we are going to MAKE it happen</span>,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'man3',
        pos: 2,
        text: <span><b>Ferrum</b><br /> is a decentralized network and exchange</span>,
        attach: 'left',
    },
    {
        type: 'circle',
        img: 'apt2',
        pos: 3,
        text: (
            <span>
                Decentralized <br/> means that it is not controlled by anyone.<br /> 
                Community owns and runs it 
            </span>),
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'man2',
        pos: 2,
        text: <span>In Ferrum, you can buy, sell, exchange any digital asset for FREE and very fast</span>,
        attach: 'left',
    },
    {
        type: 'circle',
        img: 'man5',
        pos: 2,
        text: <span>Can I buy a coffee with my <i>Bitcoin</i>s?<br/> no transaction fee?</span>,
        attach: 'right',
    },
    {
        type: 'car',
        img: 'car4',
        pos: 4,
        text: <span>YES!<br/> <b>Ferrum</b> makes it possible </span>,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'apt9',
        pos: 3,
        text: (
            <span>Through PLUGINS <br/> 
                Ferrum talks to external networks <br/>
                <i>BTC</i>, <i>ETH</i>, etc. </span>
        ),
        attach: 'right',
    },
    {
        type: 'miniman',
        img: 'miniman1',
        pos: 2,
        text: (
            <span>I can bring my <br/><b><i>Bitcoins</i></b><br/> into Ferrum and create <br/><b><i>Fe(BTC)</i></b> 
            </span>
        ),
        longText: true,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'btc',
        pos: 3,
        attach: 'left',
    },
    {
        type: 'circle',
        img: 'fe-btc',
        pos: 0,
        attach: 'float',
    },
    {
        type: 'circle',
        img: 'apt7',
        pos: 3,
        text: (
            <span><b><i>Fe(BTC)</i></b><br /> is guaranteed to have the same value of BTC!<br/>
             No fluctuations or volatility!</span>
        ),
        longText: true,
        attach: 'right',
    },
    {
        type: 'car',
        img: 'car1',
        pos: 4,
        attach: 'right',
    },
    {
        type: 'miniman',
        img: 'miniman2',
        pos: 4,
        text: (
            <span>Likewise<br/> I can bring my <b><i>Ethers</i></b> into Ferrum and create <br/><b><i>Fe(ETH)</i></b>
             </span>
        ),
        longText: true,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'eth',
        pos: 3,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'fe-eth',
        pos: 0,
        attach: 'float',
    },
    {
        type: 'circle',
        img: 'apt6',
        pos: -1,
        attach: 'left',
    },
    {
        type: 'miniman',
        img: 'miniman3',
        pos: 4,
        text: (
            <span>Blockchains <br/> <b>big</b> or <small>small</small><br/> can be represented 
            <br/> in <b>Ferrum</b>
             </span>
        ),
        longText: true,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'man2',
        text: (
            <span>I believe this <i>RND</i> coin is the next big thing! Can I add it to <b>Ferrum</b>?</span>
        ),
        pos: 3,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'fe-rnd',
        pos: 0,
        attach: 'float',
    },
    {
        type: 'circle',
        img: 'apt8',
        pos: -1,
        attach: 'left',
    },
    {
        type: 'miniman',
        img: 'miniman3',
        pos: 3,
        text: (
            <span>Sure!<br/> It will be successful <br/> as long as <br /> people use it
             </span>
        ),
        longText: true,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'apt7',
        pos: 6,
        text: (
            <span>
                <b><i>Ferrum</i></b> supports exchange protocols with no counter-party risk
            </span>
        ),
        attach: 'right',
    },
    {
        type: 'miniman',
        img: '',
        pos: 2,
        text: (
            <span>I give you <br /> some  <b><i>Bitcoin</i></b> <br/> you give me some <br /> <b><i>Ether</i></b>
             </span>
        ),
        attach: 'right',
        render: () => (
            <div style={{width: 120, height: 60}}>
                <img 
                    className="circle-img"
                    style={{top: 0, left: -50}}
                    src={require(`../assets/miniman4.png`)} 
                />                
                <img 
                    className="circle-img" 
                    style={{top: 0, left: 50}}
                    src={require(`../assets/miniman7.png`)} 
                />
            </div>
        ),
        size: [120, 60]
    },
    { // USD
        type: 'miniman',
        img: '',
        pos: 4,
        attach: 'right',
        render: () => (
            <div style={{width: 160, height: 60}}>
                <img 
                    className="circle-img"
                    style={{top: 130, left: 140}}
                    src={require(`../assets/miniman5.png`)} 
                />                
            </div>
        ),
        size: [160, 60]
    },
    {
        type: 'circle',
        img: 'apt9',
        pos: 1,
        text: (
            <span> Hey! Hey!<br /> I have a bank. <br /> I can plug Fiat currency into <b>Ferrum</b><br />
                I can create <b><i>Fe(USD)</i></b>
            </span>
        ),
        longText: true,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'coin',
        pos: 1,
        attach: 'right',
    },
    {
        type: 'circle',
        img: 'fe-usd',
        pos: 0.5,
        attach: 'float',
    },
    { // EUR
        type: 'miniman',
        img: '',
        pos: 4,
        attach: 'right',
        render: () => (
            <div style={{width: 160, height: 60}}>
                <img 
                    className="circle-img"
                    style={{top: 130, left: -140}}
                    src={require(`../assets/miniman8.png`)} 
                />                
            </div>
        ),
        size: [160, 60]
    },
    {
        type: 'circle',
        img: 'apt5',
        pos: 1,
        text: (
            <span> And I am going to plug <b>EUR</b> <br /> We are going to have <b><i>Fe(EUR)</i></b>
            </span>
        ),
        attach: 'left',
    },
    {
        type: 'circle',
        img: 'wallet',
        pos: 1,
        attach: 'left',
    },
    {
        type: 'circle',
        img: 'fe-eur',
        pos: 0.5,
        attach: 'float',
    },
    { // USD
        type: 'miniman',
        img: '',
        text: (
            <span>Unbelivable!<br/> 
                I can sell my products for <br/> <b><i>EUR, USD, BTC, ETH</i></b> <br/>
                all the same way
            </span>
        ),
        longText: true,
        pos: 4,
        attach: 'right',
        render: () => (
            <div style={{width: 160, height: 60}}>
                <img 
                    className="circle-img"
                    style={{top: -50, left: -50}}
                    src={require(`../assets/circle-busman.png`)} 
                />                
            </div>
        ),
        size: [160, 60]
    },
    { // USD
        type: 'miniman',
        img: '',
        text: (
            <span> 
                INTERNET <br />of <br /> VALUE<br /> is here!
            </span>
        ),
        pos: 5,
        attach: 'right',
        render: () => (
            <div className="road-wrap-up" >
                <img 
                    className="circle-img"
                    style={{top: 50, left: -150}}
                    src={require(`../assets/miniman4.png`)} 
                />                
                <img 
                    className="circle-img"
                    style={{top: 50, left: 0}}
                    src={require(`../assets/miniman5.png`)} 
                />                
                <img 
                    className="circle-img"
                    style={{top: 50, left: 150}}
                    src={require(`../assets/miniman7.png`)} 
                />                

                <img 
                    className="circle-img"
                    style={{top: 170, left: -200 + 0}}
                    src={require(`../assets/circle-fe-usd.png`)} 
                />                
                <img 
                    className="circle-img"
                    style={{top: 170 + 80, left: -200 + 70}}
                    src={require(`../assets/circle-fe-rnd.png`)} 
                />                
                <img 
                    className="circle-img"
                    style={{top: 170 + 160, left: -200 + 140}}
                    src={require(`../assets/circle-fe-eth.png`)} 
                />                
                <img 
                    className="circle-img"
                    style={{top: 170 + 240, left: -200 + 210}}
                    src={require(`../assets/circle-fe-eur.png`)} 
                />                
                <img 
                    className="circle-img"
                    style={{top: 170 + 320, left: -200 + 280}}
                    src={require(`../assets/circle-fe-btc.png`)} 
                />                
            </div>
        ),
        size: [524, 60]
    },
];