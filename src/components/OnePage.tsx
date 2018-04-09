import * as React from 'react';

interface NavBarProps {
    title: string;
}

const NavBar = (props: NavBarProps) => (
    null
);

const HeadBar = (props: {}) => (
    null
);

const CompareWithTraditional = (props: {}) => (
    null
);

const CompareWithAtomic = (props: {}) => (
    null
);

const Footer = (props: {}) => (
    null
);

interface OnePageState {

}

export class OnePage extends React.Component<{}, OnePageState> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar 
                    title=""
                />

                <HeadBar 
                />

                {this.props.children}

                <CompareWithTraditional 
                />

                <CompareWithAtomic
                />

                <Footer
                />
            </div>
        );
    }
}
