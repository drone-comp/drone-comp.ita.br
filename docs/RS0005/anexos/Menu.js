var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    fileManager = require('capstone-file-manager'),
    Types = capstone.Field.Types,
    Menu = new capstone.List('Menu', {
        map: { name: 'label' },
        track: true,
        defaultSort: 'sequence'
    })

new fileManager(Menu).init()

Menu.add({
    sequence: { type: Types.Number, required: true, default: 0 },
    label: { type: String, required: true, intl: true },
    caption: { type: String, intl: true },
    route: { type: String },
    link: { type: Types.Url },
    post: { type: Types.Relationship, ref: 'Post', many: false },
    category: { type: Types.Relationship, ref: 'Category', many: false },
    logo: { type: Types.File },
    enabled: { type: Boolean, default: true },
    main: { type: Boolean, default: false },
    items: { type: Types.Relationship, ref: 'Menu', many: true },
})

Menu.relationship({ ref: 'Menu', refPath: 'items', path: 'parents' })

Menu.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

Menu.defaultColumns = 'id, label, route, link, post, category'

Menu.register()