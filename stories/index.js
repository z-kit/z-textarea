import React from 'react';
import { storiesOf } from '@storybook/react';
import textarea from '../src/component';

const ZTextarea = textarea(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-textarea">
      <textarea placeholder="Type something" required />
    </div>
  ))
  .add('label', () => (
    <div className="z-textarea z-textarea--label">
      <textarea id="test" required />
      <label htmlFor="test" className="z-textarea__label">Name</label>
    </div>
  ))
  .add('colors', () => (
    <div>
      <div className="z-textarea z-textarea--success">
        <textarea placeholder="Type something" required />
      </div>
      <div className="z-textarea z-textarea--warning">
        <textarea placeholder="Type something" required />
      </div>
      <div className="z-textarea z-textarea--danger">
        <textarea placeholder="Type something" required />
      </div>
      <div className="z-textarea z-textarea--error">
        <textarea placeholder="Type something" required />
      </div>
    </div>
  ))
  .add('disabled textarea', () => (
    <div className="z-textarea">
      <textarea placeholder="Type something" disabled />
    </div>
  ))
  .add('dark', () => (
    <div style={{ width: '100%', height: '300px', background: '#333' }}>
      <div className="z-textarea z-textarea--dark">
        <textarea placeholder="Type something" required />
      </div>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <ZTextarea placeholder="Type something" />)
  .add('label', () => <ZTextarea id="test" label="Type something" required />)
  .add('colors', () => (
    <div>
      <ZTextarea placeholder="Type something" success />
      <ZTextarea placeholder="Type something" warning />
      <ZTextarea placeholder="Type something" danger />
      <ZTextarea placeholder="Type something" error />
    </div>
  ))
  .add('disabled textarea', () => <ZTextarea placeholder="Type something" disabled />)
  .add('dark', () => (
    <div style={{ width: '100%', height: '300px', background: '#333' }}>
      <ZTextarea placeholder="Type something" dark />
    </div>
  ));
