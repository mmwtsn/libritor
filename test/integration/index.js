import fs from 'fs'
import nock from 'nock'
import test from 'tape'
import {repos, contents} from '../../src'

const reposJSON = fs.readFileSync('./test/fixtures/github-repos.json', 'utf8')

nock('https://api.github.com')
  .get('/orgs/github/repos')
  .reply(200, reposJSON)

nock('https://api.github.com')
  .get('/repos/attn/repo/contents/README.md')
  .reply(200, JSON.stringify({
    name: 'file.js',
    content: '...'
  }))

test('repos', t => {
  repos('github', (err, data) => {
    if (err) throw new Error(err)

    const repos = [
      'version_sorter', 'markup', 'hub', 'github-services', 'rails',
      'gitignore', 'dmca', 'pong', 'email_reply_parser', 'developer.github.com',
      'linguist', 'testrepo', 'node-statsd', 'maven-plugins', 'statsd-ruby',
      'grit', 'hubot', 'hubot-scripts', 'GitPad', 'gemoji', 'janky', 'expecta',
      'twui', 'tainted_hash', 'GHKeyBrowser', 'msysgit', 'ernicorn',
      'game-off-2012', 'Rebel', 'specta'
    ]

    t.same(data, repos, 'returns an array of repository names')

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
