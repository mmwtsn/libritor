/* global describe, it */

import assert from 'assert'
import index from '../../src'

describe('Status', () => {
  it('is a class', done => {
    const status = new index.Status()

    assert.strictEqual(typeof index.Status, 'function')
    assert.strictEqual(status.constructor, index.Status)

    done()
  })

  const params = ['standard', '5.0.0', 'generator-npm']
  const getters = ['module', 'version', 'repo']

  params.forEach((param, i) => {
    let getter = getters[i]

    describe(`#${getter}()`, () => {
      it(`gets the ${getter} value`, done => {
        let status = new index.Status(...params)

        assert.strictEqual(status[getter], param)

        done()
      })
    })
  })
})
