var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    Email = require('keystone-email'),
    fileManager = require('capstone-file-manager'),
    Types = capstone.Field.Types,
    Post = new capstone.List('Post', {
        map: { name: 'title' },
        track: true,
        autokey: { path: 'slug', from: 'title.pt', unique: true },
        defaultSort: '-publishedDate',
    })

new fileManager(Post).init()

Post.add({
    title: { type: String, required: true, intl: true },
    subtitle: { type: String, intl: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    publishedDate: { type: Types.Date, index: true },
    approvedDate: { type: Types.Date, index: true },
    image: { type: Types.File },
    showImage: { type: Types.Boolean, default: true },
    video: { type: Types.Url },
    caption: { type: String, intl: true },
    link: { type: Types.Url },
    contact: {
        name: { type: String },
        email: { type: Types.Email },
    },
    content: {
        brief: { type: Types.Html, wysiwyg: true, height: 150, intl: true },
        extended: { type: Types.Html, wysiwyg: true, height: 400, intl: true },
    },
    categories: { type: Types.Relationship, ref: 'Category', many: true, required: true, initial: true },
    downloads: { type: Types.Relationship, ref: 'Category', many: false },
    panel: { type: Types.Select, options: 'acontece, destaque, noticia', default: 'noticia', index: true, many: true },
    continent: { type: Types.Select, options: 'americas, europa, asia, africa', index: true },
    country: { type: String },
    parent: { type: Types.Relationship, ref: 'Post', index: true },
})

Post.schema.virtual('content.full').get(function() {
    return this.content.extended || this.content.brief
})

Post.relationship({ ref: 'Slider', refPath: 'post', path: 'sliders' })

Post.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

Post.defaultColumns = 'title, subtitle, state, publishedDate, categories, downloads, panel'

Post.register()