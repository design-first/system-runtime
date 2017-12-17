describe('System Runtime runtime component', () => {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
    expect = require('chai').expect;
  }

  it('exists', () => {
    expect(runtime).to.not.be.undefined;
  });

  it('can get its version', () => {
    const version = runtime.version();

    expect(typeof version).equal('string');
  });

  it('can create a system', () => {
    const id = runtime.system('a system');

    expect(id).to.not.be.undefined;
  });

  it('can bundle a system', () => {
    const bundle = runtime.bundle();

    expect(bundle).to.not.be.undefined;
  });

  it('can get the status of all installed systems', () => {
    const status = runtime.status();
    
    expect(status).to.not.be.undefined;
  });
});
