var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    Types = capstone.Field.Types,
    Category = new capstone.List('Category', {
        map: { name: 'name' },
        track: true,
        autokey: { path: 'slug', from: 'name.pt', unique: true }
    })

Category.add({
    name: { type: String, required: true, intl: true },
    description: { type: Types.Html, wysiwyg: true, height: 150, intl: true },
})

Category.relationship({ ref: 'Post', refPath: 'categories', path: 'posts' })

Category.relationship({ ref: 'Menu', refPath: 'category', path: 'menus' })

Category.relationship({ ref: 'Archive', refPath: 'categories', path: 'archives' })

Category.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

Category.defaultColumns = 'id, name, description'

Category.register()