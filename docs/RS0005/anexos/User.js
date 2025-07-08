var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    Email = require('keystone-email'),
    fileManager = require('capstone-file-manager'),
    Types = capstone.Field.Types,
    User = new capstone.List('User', {
        map: { name: 'displayName' },
        track: true,
        autokey: { path: 'displayName', from: 'displayName', unique: true }
    })

new fileManager(User).init()

User.add({
    displayName: { type: String, unique: true, index: true },
    password: { type: Types.Password },
    email: { type: Types.Email, unique: true, index: true },
    isAdmin: { type: Boolean, default: false },
    fullName: { type: String },
    prefix: { type: String },
    title: { type: String },
    curriculum: { type: Types.Html, wysiwyg: true, height: 400, intl: true },
    site: { type: Types.Url },
    background: { type: Types.File },
    photo: { type: Types.File },
})

User.schema.virtual('canAccessKeystone').get(function() { 
    return this.isAdmin
})

User.schema.virtual('userName').get(function() {
    return this.fullName
})

User.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

User.defaultColumns = 'id, displayName, email, isAdmin'

User.register()