const 
    capstone = require('capstonejs'),
    mime = require('mime-types'),
    config = require('config')

module.exports = (req, res) => {
    const view = new capstone.View(req, res)
    locals = res.locals

    locals.language = req.params.lang

    locals.filters = { archive: req.params.archive }

    capstone.list('Archive').model.findOne({ _id: locals.filters.archive })
        .exec((err, result) => {
            const fileToDownload = config.storage.uploads
                .concat('/Archive/')
                .concat(result.archive.filename)
            const fileName = result.fileName
                .concat('.')
                .concat(mime.extension(result.archive.mimetype))

            view.res.set('Content-type', result.archive.mimetype)
            view.res.download(fileToDownload, fileName)
        })
}