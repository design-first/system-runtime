import runtime from '../src/runtime.js'
import { expect } from 'chai'

describe('a system', function () {
  let system = null

  // init
  beforeEach(function () {
    system = runtime.system('test5')
  })

  it('has a name', function () {
    expect(system.name()).equal('test5')
  })

  it('has a description', function () {
    expect(typeof system.description()).equal('string')
  })

  it('has a version', function () {
    expect(system.version()).to.not.be.undefined
  })

  it('has schemas', function () {
    expect(system.schemas()).to.not.be.undefined
  })

  it('has models', function () {
    expect(system.models()).to.not.be.undefined
  })

  it('has behaviors', function () {
    expect(system.behaviors()).to.not.be.undefined
  })

  it('has types', function () {
    expect(system.types()).to.not.be.undefined
  })

  it('has components', function () {
    expect(system.components()).to.not.be.undefined
  })

  it('can get its location', function () {
    const location = system.location()

    expect(location).to.not.be.undefined
  })
})
