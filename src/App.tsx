import * as React from 'react';
import './App.css';
import { MovieLine } from './components/MovieLine';
import { OnePage } from './components/OnePage';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
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
