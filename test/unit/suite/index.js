import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import textarea from '../../../src/component';

configure({ adapter: new Adapter() });

const ZTextarea = textarea(React.createElement);

test('Text area', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZTextarea />).html();
  const expected = shallow(
    <div className="z-textarea">
      <textarea />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Attributes', (t) => {
  const msg = 'should pass through';
  const actual = shallow(<ZTextarea placeholder="Type something" />).html();
  const expected = shallow(
    <div className="z-textarea">
      <textarea placeholder="Type something" />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Floating label', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZTextarea label="Type something" />).html();
  const expected = shallow(
    <div className="z-textarea z-textarea--label">
      <textarea />
      <label className="z-textarea__label">Type something</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Automatic label for', (t) => {
  const msg = 'should be enabled';
  const actual = shallow(<ZTextarea id="test" label="Type something" />).html();
  const expected = shallow(
    <div className="z-textarea z-textarea--label">
      <textarea id="test" />
      <label className="z-textarea__label" htmlFor="test">Type something</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZTextarea success />).html();
  const expected = shallow(
    <div className="z-textarea z-textarea--success">
      <textarea />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZTextarea warning />).html();
  const expected = shallow(
    <div className="z-textarea z-textarea--warning">
      <textarea />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZTextarea danger />).html();
  const expected = shallow(
    <div className="z-textarea z-textarea--danger">
      <textarea />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Custom color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZTextarea color="blue" />).html();
  const expected = shallow(
    <div className="z-textarea">
      <textarea style={{ borderColor: 'blue' }} />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Disabled textarea', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZTextarea disabled />).html();
  const expected = shallow(
    <div className="z-textarea">
      <textarea disabled />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Dark mode', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZTextarea dark />).html();
  const expected = shallow(
    <div className="z-textarea z-textarea--dark">
      <textarea />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});
