require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs'),
    setup = require('config')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.data = {
        today: new Date(),
        testimonials: [],
        sliders: [],
        spotlight: {},
        acontece: [],
        destaque: [],
        initiatives: [],
        menu: [],
        version: capstone.version,
    }

    view.on('init', (next) => {
        partials.menu(res.locals.language, (err, result) => {
            res.locals.data.menu = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.posts({ state: 'published', panel: 'acontece' }, res.locals.language, (err, result) => {
            res.locals.data.acontece = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.posts({ state: 'published', panel: 'destaque' }, res.locals.language, (err, result) => {
            res.locals.data.destaque = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.categories({ $or: [{ slug: setup.portal.initiatives[0] }, { slug: setup.portal.initiatives[1] }] }, res.locals.language, (err, result) => {
            result.forEach((record) => {
                partials.initiatives(record, res.locals.language, (err, result) => {
                    if (err)
                        return
                    res.locals.data.initiatives = result.concat(res.locals.data.initiatives)
                })
            })
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.testimonials(res.locals.language, (err, result) => {
            res.locals.data.testimonials = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.slider(res.locals.language, (err, result) => {
            res.locals.data.sliders = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.spotlight(res.locals.language, (err, result) => {
            res.locals.data.spotlight = result
            next(err)
        })
    })

    view.render(setup.portal['view home'])
}