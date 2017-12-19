describe('System Runtime db component', () => {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
    expect = require('chai').expect;
  }

  it('exists', () => {
    const db = runtime.require('db');

    expect(db).to.not.be.undefined;
  });
});
