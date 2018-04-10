import * as React from 'react';
import { Asset, Consts } from './timeline';
import { Context } from './context';

export interface SpriteProps {
    asset: Asset;
}

interface SpriteState {
    scrollY: number;
    leftPos: number;
    opacity: number;
}

class AssetItem extends React.Component<SpriteProps, SpriteState> {
    constructor(props: SpriteProps) {
        super(props);
    }
}

class CircleAsset extends AssetItem {
    render() {
        return (
            <img 
                className="circle-img"
                src={require(`../assets/circle-${this.props.asset.img}.png`)} 
            />
        );
    }
}

interface BubleProps extends SpriteProps {
    top: number;
    left: number;
    scrollY: number;
}

class Bubble extends React.Component<BubleProps, {}> {
    opacity(topPos: number, scrollY: number): number {
        const scrollStart = topPos - Consts.ScrollSize;
        const scrollEnds = topPos - Consts.ScrollSize * 0.5;
        const scrollWindow = scrollEnds - scrollStart;
        let opacity = 0;
        if (scrollY > scrollStart) {
            opacity = 100 - (100) * ((scrollEnds - scrollY) / scrollWindow);
        }

        if (scrollY > scrollEnds) {
            opacity = 100;
        }

        return opacity;
    }

    render() {
        let dialogueWidth = 270;
        let dialogueClass = 'dialogue';
        const topPos = this.props.top - Consts.BubbleYOffset - (this.props.asset.type === 'car' ? 100 : 0);
        const leftPos = this.props.asset.attach === 'left' ? 
            (this.props.left + Consts.BubbleOffset) : 
                ( this.props.left - Consts.BubbleSize - Consts.BubblerRightOffset );
        let imageType = this.props.asset.attach === 'left' ? 'l' : 'r';
        if (this.props.asset.type === 'car') {
            imageType = 't';
        }
        if (this.props.asset.type === 'miniman') {
            imageType = 't';
            dialogueWidth = 370;
            dialogueClass = 'dialogue-miniman';
        }
        const opacity = this.opacity(this.props.top + 200, this.props.scrollY);
        const textClass = this.props.asset.longText ? 'long-text' : undefined;
        
        return (
            <div 
                className="bubble"
                style={{top: topPos, left: leftPos, opacity: opacity / 100}}
            >
                <img 
                    className="circle-img"
                    width={dialogueWidth}
                    src={require(`../assets/dialog-${imageType}.png`)} 
                />
                <div className={dialogueClass}><span className={textClass}>{this.props.asset.text}</span></div>
            </div>
        );
    }
}

interface MinimanProps {
    asset: Asset;
    scrollY: number;
}

class Miniman extends React.Component<MinimanProps, {}> {
    constructor(props: BubleProps) {
        super(props);
    }

    scrollTop(topPos: number, scrollY: number): [number, number] {
        const scrollStart = topPos - Consts.ScrollSize;
        const scrollEnds = topPos - Consts.ScrollSize * 0.3;
        const scrollSpan = Consts.MinimanScrollSize;
        const scrollWindow = scrollEnds - scrollStart;

        let top = 0;
        let opacity = 0;

        if (scrollY > scrollStart) {
            top = topPos + (scrollSpan) * ((scrollEnds - scrollY) / scrollWindow);
            opacity = 100 - (100) * ((scrollEnds - scrollY) / scrollWindow);
        }

        if (scrollY > scrollEnds) {
            top = topPos;
            opacity = 100;
        }

        return [top, opacity];
    }

    render() {
        const size = Consts.AssetSize[this.props.asset.type];
        const topPos = Consts.SpriteTop + this.props.asset.pos * Consts.Block - size[1];
        const leftPosBase = (Consts.RightAssetLeft + Consts.LeftAssetLeft) / 2 - 25;

        const [top, opacity] = this.scrollTop(topPos, this.props.scrollY);

        return (
            <div>
            <div 
                className="miniman"
                style={{top: top + 100, left: leftPosBase, opacity: opacity / 100}}
            >
                {
                    this.props.asset.render ? this.props.asset.render() :
                        <img 
                            className="circle-img"
                            src={require(`../assets/${this.props.asset.img}.png`)} 
                        />
                }
            </div>
                {this.props.asset.text ? 
                    <Bubble 
                        top={topPos} 
                        left={400} 
                        scrollY={this.props.scrollY} 
                        asset={this.props.asset} 
                    /> : null
                }
            </div>
        );
    }
}

function assetFactory(name: string, props: SpriteProps) {
    switch (name) {
        case 'circle':
        case 'car':
            return <CircleAsset {...props} />;
        default:
            throw new Error('Invalid asset');
    }
}

export class Sprite extends React.Component<SpriteProps, SpriteState> {
    constructor(props: SpriteProps) {
        super(props);
        this.state = {
            scrollY: 0,
            leftPos: 0,
            opacity: 0,
        };
        Context.context.onScroll.push(p => {
            this.setState({...this.state, scrollY: p.y});
        });
    }

    carRightPos(leftPosBase: number, topPos: number) {
        const scrollStart = topPos - Consts.ScrollSize - 100;
        const scrollEnds = topPos + Consts.ScrollSize / 2;
        const scrollSpan = Consts.ScrollSize * 2 + 540;
        const scrollWindow = scrollEnds - scrollStart;
        leftPosBase = leftPosBase - scrollSpan + Consts.ScrollSize;
        let leftPos = 0;
        let opacity = 0;

        if (this.state.scrollY > scrollStart) {
            leftPos = leftPosBase + (scrollSpan) * ((scrollEnds - this.state.scrollY) / scrollWindow);
            opacity = 100;
            // opacity = 3 * (100 - (100) * ((scrollEnds - this.state.scrollY) / scrollWindow));
        }

        if (this.state.scrollY > scrollEnds) {
            leftPos = leftPosBase - scrollSpan;
            opacity = 0;
        }

        this.state = {...this.state, opacity: opacity, leftPos: leftPos};
    }

    rightPos(leftPosBase: number, topPos: number) {
        const scrollStart = topPos - Consts.ScrollSize;
        const scrollEnds = topPos - Consts.ScrollSize / 2;
        const scrollSpan = Consts.ScrollSize;
        const scrollWindow = scrollEnds - scrollStart;

        let leftPos = 0;
        let opacity = 0;

        if (this.state.scrollY > scrollStart) {
            leftPos = leftPosBase + (scrollSpan) * ((scrollEnds - this.state.scrollY) / scrollWindow);
            opacity = 100 - (100) * ((scrollEnds - this.state.scrollY) / scrollWindow);
        }

        if (this.state.scrollY > scrollEnds) {
            leftPos = leftPosBase || 0;
            opacity = 100;
        }

        this.state = {...this.state, opacity: opacity, leftPos: leftPos};
    }

    leftPos(leftPosBase: number, topPos: number) {
        const scrollStart = topPos - Consts.ScrollSize;
        const scrollEnds = topPos - Consts.ScrollSize * 0.3;
        const scrollWindow = scrollEnds - scrollStart;
        let leftPos = 0;
        let opacity = 0;
        if (this.state.scrollY > scrollStart) {
            leftPos = leftPosBase - (Consts.ScrollSize) * ((scrollEnds - this.state.scrollY) / scrollWindow);
            opacity = 100 - (100) * ((scrollEnds - this.state.scrollY) / scrollWindow);
        }

        if (this.state.scrollY > scrollEnds) {
            leftPos = leftPosBase || 0;
            opacity = 100;
        }

        this.state = {...this.state, opacity: opacity, leftPos: leftPos};
    }

    render() {
        if (this.props.asset.type === 'miniman') {
            return (<Miniman asset={this.props.asset} scrollY={this.state.scrollY} />);
        }

        const size = Consts.AssetSize[this.props.asset.type];
        const topPos = Consts.SpriteTop + this.props.asset.pos * Consts.Block - size[1];
        const leftPosBase = this.props.asset.attach === 'right' ? Consts.RightAssetLeft - size[0] :
            this.props.asset.attach === 'left' ? Consts.LeftAssetLeft : 0;

        if (this.props.asset.attach === 'left') {
            this.leftPos(leftPosBase, topPos);
        } else {
            if (this.props.asset.type === 'car') {
                this.carRightPos(leftPosBase, topPos);
            } else {
                this.rightPos(leftPosBase, topPos);
            }
        } 
        // Overwite the leftPos for float objects
        if (this.props.asset.attach === 'float') {
            this.state = {...this.state, leftPos: Consts.MiddleOffset - size[0] / 2};
        }
        
        return (
            <div>
            <div 
                className={this.props.asset.type} 
                style={{top: topPos, left: this.state.leftPos, opacity: this.state.opacity / 100}}
            >
                {assetFactory(this.props.asset.type, this.props)}
            </div>
                {this.props.asset.text ? 
                    <Bubble 
                        top={topPos} 
                        left={leftPosBase} 
                        scrollY={this.state.scrollY} 
                        asset={this.props.asset} 
                    /> : null}
            </div>
        );
    }
}
