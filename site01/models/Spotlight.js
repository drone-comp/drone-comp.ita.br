var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    fileManager = require('capstone-file-manager'),
    Types = capstone.Field.Types,
    Spotlight = new capstone.List('Spotlight', {
        track: true,
        defaultSort: 'updatedAt',
    })

new fileManager(Spotlight).init()

Spotlight.add({
    title: { type: String, intl: true },
    image: { type: Types.File },
    text: { type: Types.Html, wysiwyg: true, height: 150, intl: true },
})

Spotlight.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

Spotlight.defaultColumns = 'title, image, text'

Spotlight.register()