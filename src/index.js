/**
 * Module dependencies.
 */
import GitHub from 'github'

export default {
  /**
   * Gets all repositories from an organization asynchronously.
   *
   * @param {string} org - Name of the organization.
   * @param {function} callback - Callback following the err, data pattern.
   * @returns {string[]} List of repository names.
   * @public
   */
  repos (org, callback) {
    const github = new GitHub({ version: '3.0.0' })

    github.repos.getFromOrg({ org }, (err, data) => {
      if (err) return callback(err)

      const repos = JSON.parse(data).map(repo => repo.name)

      return callback(null, repos)
    })
  },

  /**
   * Gets the content of a file on a given path
   *
   * @param {string} org - Name of the organization.
   * @param {string} repo - Name of the repository.
   * @param {string} file - Relative file path to the target file.
   * @param {function} callback - Callback following the err, data pattern.
   * @returns {string}
   */
  contents (org, repo, file, callback) {
    const github = new GitHub({ version: '3.0.0' })
    const path = `${file}.raw`

    github.repos.getContent({ user: org, repo, path }, (err, data) => {
      if (err) return callback(err)

      const content = JSON.parse(data).content

      return callback(null, content)
    })
  },

  /**
   * Status class.
   *
   * @class Status
   * @classdesc Holds the status state of a GitHub project.
   */
  Status: class Status {
    constructor (module, version) {
      this.module = module
      this.version = version
    }
  }
}
