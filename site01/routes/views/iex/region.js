require('app-module-path').addPath(__dirname + '/helpers')

const 
    partials = require('partials'),
    capstone = require('capstonejs')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)

    res.locals.filters = { region: req.params.region }

    res.locals.data = {
        today: new Date(),
        acontece: [],
        destaque: [],
        menu: [],
        americas: [],
        europa: [],
        asia: [],
        africa: [],
        countries: [],
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

    if (res.locals.filters.region !== "region") {
        view.on('init', (next) => {
            partials.distinctPosts('country', { state: 'published', panel: 'coop', continent: res.locals.filters.region }, (err, result) => {
                res.locals.data.countries = result
                next(err)
            })
        })
    } else {
        ['americas', 'europa', 'asia', 'africa'].forEach((region) => {
            view.on('init', (next) => {
                partials.distinctPosts('country', { state: 'published', panel: 'coop', continent: region }, (err, result) => {
                    res.locals.data[region] = result
                    next(err)
                })
            })
        })
    }

    view.render('iex/region')

}