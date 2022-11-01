import runtime from '../src/runtime.js'
import { expect } from 'chai'

describe('System Runtime runtime component', function () {
  it('exists', function () {
    expect(runtime).to.not.be.undefined
  })

  it('can get its version', function () {
    const version = runtime.version()

    expect(typeof version).equal('string')
  })

  it('can create a system', function () {
    const id = runtime.system('a system')

    expect(id).to.not.be.undefined
  })

  it('can bundle a system', function () {
    const bundle = runtime.bundle()

    expect(bundle).to.not.be.undefined
  })

  it('can get the status of all installed bundles', function () {
    const status = runtime.status()

    expect(status).to.not.be.undefined
  })

  it('can install a bundle', function () {
    const systemId = runtime.install({
      name: 'Test',
      master: true,
      version: '0.0.1',
      description: '',
      schemas: {
        k141cc1821c1b775: {
          _id: 'k141cc1821c1b775',
          _name: 'TestSchema',
          _inherit: ['_Component'],
        },
      },
      models: {
        b19c171575f1824b: {
          _id: 'b19c171575f1824b',
          _name: 'TestSchema',
          _description: '',
        },
      },
      behaviors: {
        n1e72b1ed051cf36: {
          _id: 'n1e72b1ed051cf36',
          component: 'k16d101760d1ec2a',
          state: 'start',
          action: 'function start() { \n  \n}',
          useCoreAPI: false,
          core: false,
        },
      },
      types: {
        TestType: {
          _id: 'o1cf651e05613735',
          name: 'TestType',
          description: '',
          type: 'object',
          schema: {
            property1: {
              type: 'any',
              mandatory: false,
              default: '',
            },
            property2: {
              type: 'any',
              mandatory: false,
              default: '',
            },
          },
        },
      },
      components: {
        TestSchema: {
          z1f91a1beb01f48f: {
            _id: 'z1f91a1beb01f48f',
          },
        },
      },
      _id: 'k16d101760d1ec2a',
    })

    expect(systemId).equal('k16d101760d1ec2a')
  })

  it('can uninstall a bundle', function () {
    runtime.uninstall('k16d101760d1ec2a')
    const state = runtime.require('k16d101760d1ec2a').state()

    expect(state).equal('uninstalled')
  })
})
