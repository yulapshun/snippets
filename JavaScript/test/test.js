const expect = require('chai').expect;
const index = require('..');

describe('leftPadding', function() {
  const leftPadding = index.leftPadding;
  it('Add 2 zeros', function() {
    expect(leftPadding(1, 3)).to.be.equal('001');
  });
  it('Add nothing', function() {
    expect(leftPadding(1)).to.be.equal('1');
  });
  it('Add 10 spaces', function() {
    expect(leftPadding(99, 9, ' ')).to.be.equal('       99');
  });
  it('Add to string', function() {
    expect(leftPadding('hihi', 8, 'o')).to.be.equal('oooohihi');
  });
  it('Invalid input', function() {
    expect(() => leftPadding()).to.throw();
  });
});

describe('currencyFormat', function() {
  const currencyFormat = index.currencyFormat;
  it('Add 1 default separator with decimal symbol and decimal place', function() {
    expect(currencyFormat(1000)).to.be.equal('1,000.00');
  });
  it('5 decimal places', function() {
    expect(currencyFormat(32947, 5)).to.be.equal('32,947.00000');
  });
  it('Round down', function() {
    expect(currencyFormat(982354.2113, 3)).to.be.equal('982,354.211');
  });
  it('Round up', function() {
    expect(currencyFormat(23434322.125, 2)).to.be.equal('23,434,322.13');
  });
  it('Replace decimal point symbol', function() {
    expect(currencyFormat(7402902.390, 4, 'd')).to.be.equal('7,402,902d3900');
  });
  it('Replace separator symbol', function() {
    expect(currencyFormat(3490239042.23409402, 6, undefined, 's')).to.be.equal('3s490s239s042.234094');
  });
  it('Invalid input 1', function() {
    expect(currencyFormat("jk")).to.be.equal('0.00');
  });
  it('Invalid input 2', function() {
    expect(currencyFormat(12, 'd')).to.be.equal('12.00');
  });
  it('Invalid input 3', function() {
    expect(currencyFormat()).to.be.equal('0.00');
  });
});

describe('objectToQuerystring', function() {
  const objectToQueryString = index.objectToQueryString;
  it('Normal object', function() {
    expect(objectToQueryString({page: 10, limit: 20, lang: 'en_US'})).to.be.equal('page=10&limit=20&lang=en_US');
  });
  it('Empty object', function() {
    expect(objectToQueryString({})).to.be.equal('');
  });
  it('Array input', function() {
    expect(objectToQueryString(['hi', 'test'])).to.be.equal('0=hi&1=test');
  });
  it('Invalid input 1', function() {
    expect(objectToQueryString("hihi")).to.be.equal('0=h&1=i&2=h&3=i');
  });
  it('Invalid input 2', function() {
    expect(objectToQueryString(2)).to.be.equal('');
  });
});
