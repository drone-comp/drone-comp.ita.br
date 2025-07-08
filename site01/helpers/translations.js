const _ = require('lodash')

require('dotenv').config()

const
    env = process.env.NODE_ENV === undefined ? 'prod' : process.env.NODE_ENV
    pt_custom = require('../translations/'.concat(env).concat('/').concat('pt.js'))
    pt_common = require('../translations/pt.js')
    pt = _.merge({}, pt_common, pt_custom)
    en_custom = require('../translations/'.concat(env).concat('/').concat('en.js'))
    en_common = require('../translations/en.js')
    en = _.merge({}, en_common, en_custom)

module.exports = { pt, en }