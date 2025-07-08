require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs'),
    setup = require('config')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.data = {
        today: new Date(),
        acontece: [],
        destaque: [],
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

    view.render('profile')
}