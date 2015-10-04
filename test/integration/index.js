/* global describe, it */

import assert from 'assert'
import nock from 'nock'
import index from '../../src'

// Prevent outbound HTTP requests
nock('https://api.github.com')
  .get('/orgs/attn/repos')
  .reply(200, JSON.stringify([
    { name: 'a', date: 20150101, thing: true },
    { name: 'b', date: 20150102, thing: true }
  ]))

nock('https://api.github.com')
  .get('/repos/attn/repo/contents/README.md.raw')
  .reply(200, JSON.stringify({
    name: 'file.js',
    content: '...'
  }))

describe('repos', () => {
  it('returns an array of repository names', done => {
    index.repos('attn', (err, data) => {
      if (err) throw new Error(err)

      assert.deepEqual(data, ['a', 'b'])

      done()
    })
  })
})

describe('contents', () => {
  it('returns a file\'s content', done => {
    index.contents('attn', 'repo', 'README.md', (err, data) => {
      if (err) throw new Error(err)

      assert.strictEqual(data, '...')

      done()
    })
  })
})
