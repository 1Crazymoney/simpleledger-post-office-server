/*
  This config library is composed from other files in this directory.
*/

// Common configuration settings that apply to all environments.
const common = require('./env/common')

// Environment (test, dev, prod) specific settings.
const env = process.env.POENV || 'dev'
const envConfig = require(`./env/${env}`)

// Server settings.
const defaultConfig = require('./server-settings/default.json')
let serverConfig = {}
try {
  serverConfig = require('./server-settings/server-config.json')
} catch (err) {}

module.exports = Object.assign({}, common, envConfig, defaultConfig, serverConfig)
