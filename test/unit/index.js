/* global describe, it */

import assert from 'assert'
import {Status} from '../../src'

describe('Status', () => {
  it('is a class', done => {
    const status = new Status()

    assert.strictEqual(typeof Status, 'function')
    assert.strictEqual(status.constructor, Status)

    done()
  })

  const params = ['attn', 'generator-npm']
  const getters = ['owner', 'repo']

  params.forEach((param, i) => {
    let getter = getters[i]

    describe(`#${getter}()`, () => {
      it(`gets the ${getter} value`, done => {
        let status = new Status(...params)

        assert.strictEqual(status[getter], param)

        done()
      })
    })
  })
})
