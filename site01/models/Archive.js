var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    fileManager = require('capstone-file-manager'),
    Types = capstone.Field.Types,
    Archive = new capstone.List('Archive', {
        map: { name: 'fileName' },
        track: true,
    })

new fileManager(Archive).init()

Archive.add({
    fileName: { type: String, required: true },
    caption: { type: String },
    description: { type: Types.Html, wysiwyg: true, height: 150, intl: true },
    archive: { type: Types.File },
    categories: { type: Types.Relationship, ref: 'Category', many: true },
    enabled: { type: Boolean, default: true },
})

Archive.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

Archive.defaultColumns = 'fileName, caption, categories'

Archive.register()