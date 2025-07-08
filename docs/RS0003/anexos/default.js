require('app-module-path').addPath(__dirname + '/helpers')

const engine = require('express-handlebars')
const handlebarsHelpers = require('handlebars-helpers')()
const templateHelpers = require('template-helpers')()
const helperMoment = require('helper-moment')

const log = require('logger')

const UPLOADS = './assets/static/core/uploads'

module.exports = {
    storage: {
        uploads: UPLOADS,
    },
    cms: {
        'name': 'Portal ITA',
        'brand': 'ITA',
        'favicon': 'assets/favicon.ico',
        'static': 'assets',
        'compress': true,

        'auto update': true,
        'user model': 'User',

        'port': 3001,
        'session': true,
        'session store': 'mongo',
        'auth': true,
        'admin path': 'admin',
        'signin logo': '/static/images/logo-ita.png',

        // 'ldap server': {
        //     url: 'ldap://172.17.1.30:389',
        // },
        'ldap auth user': 'cn=admin,dc=ita,dc=br',
        'ldap auth password': 'p4ssw0rd',
        'ldap query base': 'dc=portal,dc=ita,dc=br',
        'ldap query user': {
            filter: '(objectClass=account)',
            scope: 'sub',
            attrs: '*',
        },
        'ldap query role': {
            filter: '(objectClass=groupOfNames)',
            scope: 'sub',
            attrs: '*',
        },
        'ldap default role': 'cn=admin,dc=portal,dc=ita,dc=br',

        'applog': log.applog,
        'seclog': log.seclog,

        'logger': 'combined',
        'logger options': {
            stream: log.reqlog.stream
        },

        'kfm public url': '/core/uploads/',
        'kfm uploaded files storage': UPLOADS,

        'supported languages': ['pt', 'en'],
        'language': 'pt',

        'cors allow methods': false,
        'cors allow headers': false,

        'views': 'views',

        'custom engine': engine({
            helpers: [
                handlebarsHelpers,
                templateHelpers,
                helperMoment,
            ],
            layoutsDir: 'views/layouts',
            partialsDir: 'views/partials',
            defaultLayout: 'default.handlebars',
        }),
        'view engine': 'handlebars',

        'wysiwyg additional options': { extended_valid_elements : 'pre[*]' },
    },
    models: './models',
    routes: './routes',
}