describe('a System Runtime component classInfo property', () => {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
    expect = require('chai').expect;
  }

  it('can show its model', () => {
    const model = runtime.classInfo().model();

    expect(model).to.not.be.undefined;
  });

  it('can show its schema', () => {
    const schema = runtime.classInfo().schema();

    expect(schema).to.not.be.undefined;
  });

  it('can show a definition of a property', () => {
    const property = runtime.classInfo().property('version');

    expect(property.type).equal('string');
  });

  it('can show its properties', () => {
    const properties = runtime.classInfo().properties();

    expect(Array.isArray(properties)).equal(true);
  });

  it('can show a definition of a link', () => {
    const link = runtime.classInfo().property('version');

    expect(link.type).equal('string');
  });

  it('can show its links', () => {
    const links = runtime.classInfo().links();

    expect(Array.isArray(links)).equal(true);
  });

  it('can show a definition of a method', () => {
    const method = runtime.classInfo().method('system');

    expect(method.result).equal('object');
  });

  it('can show its methods', () => {
    const methods = runtime.classInfo().methods();

    expect(Array.isArray(methods)).equal(true);
  });

  it('can show a definition of a collection', () => {
    const collection = runtime.classInfo().collection('system');

    expect(collection.result).to.be.undefined;
  });

  it('can show its collections', () => {
    const collections = runtime.classInfo().collections();

    expect(Array.isArray(collections)).equal(true);
  });

  it('can show the definition of an event', () => {
    const event = runtime.classInfo().event('error');

    expect(event.params[0].name).equal('data');
  });

  it('can show its events', () => {
    const events = runtime.classInfo().events();
    expect(Array.isArray(events)).equal(true);
  });
});