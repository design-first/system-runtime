import runtime from '../../dist/system-runtime.js'

describe('System Runtime db component', function () {
  it('exists', function () {
    const db = runtime.require('db')
    expect(db).to.not.be.undefined
  })
})
