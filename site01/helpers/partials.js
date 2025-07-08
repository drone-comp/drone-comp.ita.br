require('app-module-path').addPath(__dirname + '/helpers')

const config = require('config')
const capstone = require('capstonejs')

exports.menu = (language, callback) => {
    capstone.list('Menu').model.find({ main: true, enabled: true })
        .populate({
            path: 'items category post',
            populate: {
                path: 'items category post',
                populate: {
                    path: 'items category post',
                    populate: { path: 'post' },
                }
            }
        })
        .sort({ sequence: 1 })
        .exec((err, result) => {
            if (result)
                result.forEach((record) => {
                    record.setLanguage(language)
                    record.items.forEach((item) => {
                        item.setLanguage(language)
                        item.items.forEach((subItem) => {
                            subItem.setLanguage(language)
                            subItem.items.forEach((subSubItem) => {
                                subSubItem.setLanguage(language)
                            })
                        })
                    })
                })
            callback(err, result)
        })
}

exports.initiatives = (category, language, callback) => {
    capstone.list('Menu').model.find({ main: false, enabled: true, category: category._id })
        .exec((err, result) => {
            if (result !== null)
                result.forEach((record) => {
                    record.setLanguage(language)
                })
            callback(err, result)
        })
}

exports.posts = (query, language, callback) => {
    var filter = query
    if (!filter)
        filter = config.cms.frontPageCategories
    capstone.list('Post').model.find(filter)
        .limit(100)
        .sort({ publishedDate: -1 })
        .exec((err, result) => {
            if (result)
                result.forEach((record) => {
                    record.setLanguage(language)
                })
            callback(err, result)
        })
}

exports.distinctPosts = (distinct, query, callback) => {
    capstone.list('Post').model.distinct(distinct, query)
        .exec((err, result) => {
            callback(err, result)
        })
}

exports.post = (query, language, callback) => {
    capstone.list('Post').model.findOne(query)
        .sort({ publishedDate: -1 })
        .limit(1)
        .exec((err, result) => {
            if (result)
                result.setLanguage(language)
            callback(err, result)
        })
}

exports.category = (query, language, callback) => {
    capstone.list('Category').model.findOne(query)
    .exec((err, result) => {
        if (result)
            result.setLanguage(language)
        callback(err, result)
    })
}

exports.categories = (query, language, callback) => {
    capstone.list('Category').model.find(query)
    .exec((err, result) => {
        if (result)
            result.forEach((record) => {
                record.setLanguage(language)
            })
        callback(err, result)
    })
}

exports.archives = (filter, language, callback) => {
    capstone.list('Archive').model.find({ enabled: true, categories: { $in: filter } })
        .populate({
            path: 'categories createdBy '
        })
        .exec((err, result) => {
            if (result)
                result.forEach((record) => {
                    record.setLanguage(language)
                })
            callback(err, result)
        })

}

exports.testimonials = (language, callback) => {
    capstone.list('Testimonial').model.find()
        .exec((err, result) => {
            if (result)
                result.forEach((record) => {
                    record.setLanguage(language)
                })
            callback(err, result)
        })
}

exports.slider = (language, callback) => {
    capstone.list('Slider').model.find()
        .populate({ path: 'post' })
        .exec((err, result) => {
            if (result)
                result.forEach((record) => {
                    record.setLanguage(language)
                    record.post.setLanguage(language)
                })
            callback(err, result)
        })
}

exports.spotlight = (language, callback) => {
    capstone.list('Spotlight').model.findOne()
        .sort({ updatedAt: -1 })
        .limit(1)
        .exec((err, result) => {
            if (result)
                result.setLanguage(language)
            callback(err, result)
        })
}