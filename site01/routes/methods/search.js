require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.language = req.params.lang

    res.locals.filters = { query: req.query.query }

    res.locals.config = require('config')

    res.locals.data = {
        today: new Date(),
        menu: [],
        list: [],
    }

    view.on('init', (next) => {
        partials.menu(res.locals.language, (err, result) => {
            res.locals.data.menu = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.posts({ $text: { $search: res.locals.filters.query } }, res.locals.language, (err, result) => {
            res.locals.data.list = result
            next(err)
        })
    })

    view.render('search/results')
}