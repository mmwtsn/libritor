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

  describe('#module()', () => {
    it('gets the set module value', done => {
      const status = new index.Status('express', '4.0.0')

      assert.strictEqual(status.module, 'express')

      done()
    })
  })

  describe('#version()', () => {
    it('gets the set version value', done => {
      const status = new index.Status('express', '4.0.0')

      assert.strictEqual(status.version, '4.0.0')

      done()
    })
  })
})
