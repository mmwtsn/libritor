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
   * @returns {string[]}
   * @public
   */
  repos (org, callback) {
    const github = new GitHub({ version: '3.0.0' })

    github.repos.getFromOrg({ org }, (err, data) => {
      if (err) return callback(err)

      return callback(null, data)
    })
  }
}
