import test from 'tape'
import {Status} from '../../src'

test('Status', t => {
  const status = new Status()
  const params = ['attn', 'generator-npm']
  const getters = ['owner', 'repo']

  t.equal(typeof Status, 'function', 'is a function')
  t.equal(status.constructor, Status, 'constructor is Status')

  params.forEach((param, i) => {
    let getter = getters[i]
    let _status = new Status(...params)

    t.equal(_status[getter], param, `#${getter}() gets the ${getter} value`)
  })

  t.end()
})
