import test from 'ava';
import Nightmare from 'nightmare';

test('CSS component - default', (t) => {
  t.plan(1);
  const msg = 'should render the placeholder';
  const expected = 'Type something';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--default')
    .wait('.z-textarea')
    .evaluate(() => document.querySelector('.z-textarea > textarea').getAttribute('placeholder'))
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - border', (t) => {
  t.plan(1);
  const msg = 'should render the border';
  const expected = '2px solid rgb(153, 153, 153)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--default')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea > textarea')).border)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - label', (t) => {
  t.plan(1);
  const msg = 'should render the label at the correct position';
  const expected = '16px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--label')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea__label')).top)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - floating label', (t) => {
  t.plan(1);
  const msg = 'should float the label';
  const expected = '-8px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--label')
    .wait('.z-textarea')
    .type('.z-textarea > textarea', 'Test')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea__label')).top)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - success', (t) => {
  t.plan(1);
  const msg = 'should render the success color';
  const expected = 'rgb(118, 178, 69)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea:nth-of-type(1) > textarea')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - warning', (t) => {
  t.plan(1);
  const msg = 'should render the warning color';
  const expected = 'rgb(224, 185, 56)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea:nth-of-type(2) > textarea')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - danger', (t) => {
  t.plan(1);
  const msg = 'should render the danger color';
  const expected = 'rgb(216, 52, 63)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea:nth-of-type(3) > textarea')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - error', (t) => {
  t.plan(1);
  const msg = 'should render the error color';
  const expected = 'rgb(255, 0, 0)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--colors')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea:nth-of-type(4) > textarea')).borderColor)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - disabled textarea', (t) => {
  t.plan(1);
  const msg = 'should render an textarea with some opacity';
  const expected = 0;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--disabled-textarea')
    .wait('.z-textarea')
    .evaluate(() => {
      const textareaStyle = getComputedStyle(document.querySelector('.z-textarea > textarea'));
      return parseInt(textareaStyle.opacity, 10);
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - dark', (t) => {
  t.plan(1);
  const msg = 'should render an textarea with white text color';
  const expected = 'rgb(255, 255, 255)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?id=stateless-functional-component--dark')
    .wait('.z-textarea')
    .evaluate(() => getComputedStyle(document.querySelector('.z-textarea > textarea')).color)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
