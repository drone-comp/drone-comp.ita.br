require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.filters = { category: req.params.category }

    res.locals.data = {
        today: new Date(),
        menu: [],
        category: {},
        list: [],
    }

    view.on('init', (next) => {
        partials.menu(res.locals.language, (err, result) => {
            res.locals.data.menu = result
            next(err)
        })
    })

    view.on('init', (next) => {
        partials.category({ slug: [res.locals.filters.category] }, res.locals.language, (err, result) => {
            res.locals.data.category = result
            next(err)
        })
    })

    view.on('init', (next) => {
        if (res.locals.data.category && res.locals.data.category._id) {
            partials.posts({ state: 'published', categories: { $in: [res.locals.data.category._id] } }, res.locals.language, (err, result) => {
                res.locals.data.list = result
                next(err)
            })
        } else
            next()
    })

    view.render('search/posts')
}