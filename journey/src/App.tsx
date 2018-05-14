import * as React from 'react';
import './App.css';
import { MovieLine } from './components/MovieLine';
import { OnePage } from './components/OnePage';

const Loading: React.StatelessComponent<{}> = props => (
  <div 
    className="container" 
    style={{position: 'absolute', top: 0, buttom: 0,
    width: '100%', height: '100%'}}
  >
      <div 
        className="text-center" 
        style={{position: 'absolute', 
                top: '50%', left: '50%', width: 400, height: 500, marginTop: -200, marginLeft: -200 }} 
      >
        <p className="top-sub-header" style={{fontSize: 18, color: 'grey'}}>
          <span>PREPARING THE FERRUM JOURNEY</span></p>

        <img src={require('./assets/loading.gif')} style={{marginTop: 30}}/>
      </div>
  </div>
);

interface AppState {
  loading: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
    };
    window.setTimeout(() => this.setState({ loading: false }), 10000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="App" style={{minHeight: 2000, width: '100%'}}>
        <OnePage>
          <MovieLine />
        </OnePage>
      </div>
    );
  }
}

export default App;
