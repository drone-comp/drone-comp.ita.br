require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.filters = { post: req.params.post }

    res.locals.data = {
        today: new Date(),
        acontece: [],
        destaque: [],
        menu: [],
        post: {},
        list: [],
        child: [],
        sidebar: req.query.sidebar,
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
        partials.post({ slug: res.locals.filters.post }, res.locals.language, (err, result) => {
            res.locals.data.post = result
            next(err)
        })
    })

    view.on('init', (next) => {
        if (res.locals.data.post) {
            partials.posts({ state: 'published', parent: res.locals.data.post._id.toString() }, res.locals.language, (err, result) => {
                res.locals.data.child = result
                next(err)
            })
        } else
            next()
    })

    view.on('init', (next) => {
        if (res.locals.data.post) {
            if (res.locals.data.post.downloads) {
                const filter = []
                filter.push(Array.prototype.map.call(new Uint8Array(res.locals.data.post.downloads.id), (x) => ('00' + x.toString(16)).slice(-2)).join(''));
                partials.archives(filter, res.locals.language, (err, result) => {
                    res.locals.data.list = result
                    next(err)
                })
            } else
                next()
        } else
            next()
    })

    view.render('post')
}