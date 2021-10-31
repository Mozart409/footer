import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Footer } from '../dist/index';

const App = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
