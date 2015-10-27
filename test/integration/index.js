import nock from 'nock'
import test from 'tape'
import {repos, contents} from '../../src'

nock('https://api.github.com')
  .get('/orgs/attn/repos')
  .reply(200, JSON.stringify([
    { name: 'a', date: 20150101, thing: true },
    { name: 'b', date: 20150102, thing: true }
  ]))

nock('https://api.github.com')
  .get('/repos/attn/repo/contents/README.md')
  .reply(200, JSON.stringify({
    name: 'file.js',
    content: '...'
  }))

test('repos', t => {
  repos('attn', (err, data) => {
    if (err) throw new Error(err)

    t.same(data, ['a', 'b'], 'returns an array of repository names')

    t.end()
  })
})

test('contents', t => {
  contents('attn', 'repo', 'README.md', (err, data) => {
    if (err) throw new Error(err)

    t.equal(data, '...', 'returns a file\'s content')

    t.end()
  })
})
