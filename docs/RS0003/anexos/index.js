const capstone = require('capstonejs')
const headers = require('helmet')
const expectCT = require('expect-ct')
const crypto = require('crypto')
const moment = require('moment')
const setup = require('config')
const log = require('logger')
const expressWinston = require('express-winston')

const routeImporter = capstone.importer(__dirname)

const routes = {
    views: routeImporter('views'),
    methods: routeImporter('methods'),
}

exports = module.exports = (app) => {

    app.set('trust proxy', true)

    app.use(expressWinston.logger({
        winstonInstance: log.reqlog,
        meta: true,
        metaField: null,
        responseField: null,
        requestWhitelist: ['headers', 'query'],
        responseWhitelist: ['body'],
        dynamicMeta: (req, res) => {
            const httpRequest = {}
            const meta = {}
            if (req) {
                meta.httpRequest = httpRequest
                httpRequest.requestMethod = req.method
                httpRequest.requestUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
                httpRequest.protocol = `HTTP/${req.httpVersion}`
                // httpRequest.remoteIp = req.ip // this includes both ipv6 and ipv4 addresses separated by ':'
                httpRequest.remoteIp = req.ip.indexOf(':') >= 0 ? req.ip.substring(req.ip.lastIndexOf(':') + 1) : req.ip
                httpRequest.requestSize = req.socket.bytesRead
                httpRequest.userAgent = req.get('User-Agent')
                httpRequest.referrer = req.get('Referrer')
            }
            return meta
        }
    }))

    app.use((req, res, next) => {
        res.locals.config = setup

        const nonce = crypto.randomBytes(16).toString('hex')

        res.locals.nonce = nonce

        next()
    })

    if (setup.env === 'validation') {

    } else {
        app.use(headers.hsts({
            maxAge: 5184000,
            includeSubDomains: false,
        }))
        app.use(headers.xssFilter())
        app.use(headers.noSniff())
        app.use(headers.hidePoweredBy())
        app.use(headers.featurePolicy({
            features: { fullscreen: ["'self'"] }
        }))
        app.use(headers.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                childSrc: ["'self'", 'https://*.youtube-nocookie.com', 'https://maps.google.com', 'https://www.google.com', 'https://calendar.google.com'],
                styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
                fontSrc: ["'self'", 'https://fonts.googleapis.com', 'https://barra.brasil.gov.br', 'https://fonts.gstatic.com'],
                imgSrc: ["'self'", "data:", 'https://barra.brasil.gov.br'],
                scriptSrc: [
                    "'strict-dynamic'",
                    (req, res) => `'nonce-${res.locals.nonce}'`,
                ],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: true,
                baseUri: ["'none'"],
            }
        }))
        app.use(expectCT({
            enforce: true,
            maxAge: 120,
        }))
    }

    app.use('/:lang?', (req, res, next) => {
        res.locals.config = require('config')

        res.locals.language = ((req.params.lang === undefined) ? res.locals.config.cms.language : ['pt', 'en'].includes(req.params.lang) ? req.params.lang : res.locals.config.cms.language)

        const translations = require('translations')
        res.locals.translation = ((translations[res.locals.language] === undefined) ? translations[res.locals.config.cms.language] : translations[res.locals.language])

        moment.locale(res.locals.language)

        capstone.session.setLanguage(req, res.locals.language)

        next()
    })

    app.get('/:lang?/search', [capstone.middleware.api, capstone.middleware.cors], routes.methods.search)
    app.get('/:lang?', [capstone.middleware.api, capstone.middleware.cors], routes.views.home)
    app.get('/:lang?/gallery/:gallery', [capstone.middleware.api, capstone.middleware.cors], routes.views.search.gallery)
    app.get('/:lang?/geral', [capstone.middleware.api, capstone.middleware.cors], routes.views.about)
    app.get('/:lang?/iex/:region', [capstone.middleware.api, capstone.middleware.cors], routes.views.iex.region)
    app.get('/:lang?/iex/local/:local', [capstone.middleware.api, capstone.middleware.cors], routes.views.iex.local)
    app.get('/:lang?/post/download/:archive', [capstone.middleware.api, capstone.middleware.cors], routes.methods.download)
    app.get('/:lang?/post/:post', [capstone.middleware.api, capstone.middleware.cors], routes.views.post)
    app.get('/:lang?/posts/category/:category', [capstone.middleware.api, capstone.middleware.cors], routes.views.search.posts)

}