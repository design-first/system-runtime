describe('a system', () => {

  let system = null;

  // init
  beforeEach(() => {
    if (typeof window === 'undefined') {
      runtime = require('../../src/runtime.js');
      expect = require('chai').expect;
    }
    system = runtime.system('test5');
  });

  it('has a name', () => {
    expect(system.name()).equal('test5');
  });

  it('has a description', () => {
    expect(typeof system.description()).equal('string');
  });

  it('has a version', () => {
    expect(system.version()).to.not.be.undefined;
  });

  it('has schemas', () => {
    expect(system.schemas()).to.not.be.undefined;
  });

  it('has models', () => {
    expect(system.models()).to.not.be.undefined;
  });

  it('has behaviors', () => {
    expect(system.behaviors()).to.not.be.undefined;
  });

  it('has types', () => {
    expect(system.types()).to.not.be.undefined;
  });

  it('has components', () => {
    expect(system.components()).to.not.be.undefined;
  });

  it('can get its location', () => {
    const location = system.location();

    expect(location).to.not.be.undefined;
  });
});