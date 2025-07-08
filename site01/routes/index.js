const 
    capstone = require('capstonejs'),
    headers = require('helmet'),
    crypto = require('crypto'),
    moment = require('moment'),
    setup = require('config'),
    applog = require('logger').applog,
    seclog = require('logger').seclog,
    routeImporter = capstone.importer(__dirname),
    routes = {
        views: routeImporter('views'),
        methods: routeImporter('methods'),
    }

exports = module.exports = (app) => {

    app.use((req, res, next) => {
        res.locals.data = {
            version: require('../package.json').version
        }
        res.locals.config = setup

        res.locals.nonce = crypto.randomBytes(16).toString('hex')

        next()
    })

    if (setup.csp) {
        seclog.info('Applying CSP rules')

        /* 
        * Registra manualmente enquanto ñ liberar plugin 
        * @see https://github.com/helmetjs/helmet/issues/234
        */
        app.use((req, res, next) => {
            res.setHeader('Permissions-Policy', 'geolocation=(), interest-cohort=()')
            next()
        })
        
        app.use(headers.hsts(setup.headers.hsts))
        app.use(headers.dnsPrefetchControl(setup.headers.dnsPrefetchControl))
        app.use(headers.expectCt(setup.headers.expectCt))
        app.use(headers.frameguard(setup.headers.frameguard))
        app.use(headers.referrerPolicy(setup.headers.referrerPolicy))
        app.use(headers.permittedCrossDomainPolicies(setup.headers.permittedCrossDomainPolicies))
        app.use(headers.contentSecurityPolicy(setup.headers.contentSecurityPolicy))
        app.use(headers.originAgentCluster())
        app.use(headers.hidePoweredBy())
        app.use(headers.ieNoOpen())
        app.use(headers.noSniff())
        app.use(headers.xssFilter())
    }
    else {
        seclog.warn('CSP rules disabled')
        applog.warn('CSP rules disabled')
        console.log('CSP rules disabled')
    }

    app
        .get('/image/:archive', [capstone.middleware.api, capstone.middleware.cors], routes.methods.download)
        .get('/archive/:archive', [capstone.middleware.api, capstone.middleware.cors], routes.methods.download)

        .use('/:lang?', (req, res, next) => {
            res.locals.config = setup

            if (req.params.lang !== setup.cms['admin path']) {
                res.locals.language = ((req.params.lang === undefined) ? setup.cms.language : setup.cms['supported languages'].includes(req.params.lang) ? req.params.lang : setup.cms.language)

                const translations = require('translations')
                res.locals.translation = ((translations[res.locals.language] === undefined) ? translations[setup.cms.language] : translations[res.locals.language])

                moment.locale(res.locals.language)

                capstone.session.setLanguage(req, res.locals.language)
            }

            next()
        })

        .get('/:lang?/search', [capstone.middleware.api, capstone.middleware.cors], routes.methods.search)
        .get('/:lang?', [capstone.middleware.api, capstone.middleware.cors], routes.views.home)
        .get('/:lang?/gallery/:gallery', [capstone.middleware.api, capstone.middleware.cors], routes.views.search.gallery)
        .get('/:lang?/geral', [capstone.middleware.api, capstone.middleware.cors], routes.views.about)
        .get('/:lang?/iex/:region', [capstone.middleware.api, capstone.middleware.cors], routes.views.iex.region)
        .get('/:lang?/iex/local/:local', [capstone.middleware.api, capstone.middleware.cors], routes.views.iex.local)
        .get('/:lang?/post/download/:archive', [capstone.middleware.api, capstone.middleware.cors], routes.methods.download)
        .get('/:lang?/post/:post', [capstone.middleware.api, capstone.middleware.cors], routes.views.post)
        .get('/:lang?/posts/category/:category', [capstone.middleware.api, capstone.middleware.cors], routes.views.search.posts)
        .get('/:lang?/profile', [capstone.middleware.api, capstone.middleware.cors], routes.views.profile)

}
