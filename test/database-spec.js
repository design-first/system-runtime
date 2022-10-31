import runtime from '../src/runtime.js'
import { expect } from 'chai'

describe('System Runtime db component', function () {
  it('exists', function () {
    const db = runtime.require('db')

    expect(db).to.not.be.undefined
  })
})
