import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Footer } from '../stories/Footer.stories';
import { Footer as FooterSrc } from '../src/index';

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders from src without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FooterSrc />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
