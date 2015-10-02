/* global describe, it */

import assert from 'assert'
import index from '../src'

describe('Module', () => {
  it('exports an object', () => {
    assert.strictEqual(typeof index, 'object')
  })
})
