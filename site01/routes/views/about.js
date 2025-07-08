require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.data = {
        today: new Date(),
        menu: [],
        info: {},
        grad: {},
        posgrad: {},
        pg: [],
        g: [],
    }

    view.on('init', (next) => {
        partials.menu(res.locals.language, (err, result) => {
            res.locals.data.menu = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.post({ panel: 'info' }, res.locals.language, (err, result) => {
            res.locals.data.info = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.post({ panel: 'grad' }, res.locals.language, (err, result) => {
            res.locals.data.grad = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.post({ panel: 'posgrad' }, res.locals.language, (err, result) => {
            res.locals.data.grad = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.posts({ panel: 'pg' }, res.locals.language, (err, result) => {
            res.locals.data.pg = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.posts({ panel: 'g' }, res.locals.language, (err, result) => {
            res.locals.data.geral = result
            next(err)
        })
    })

    view.render('about')
}