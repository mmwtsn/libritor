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
})
