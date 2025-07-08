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
    })

new fileManager(User).init()

var rules = []
Object.keys(config.cms['access rules']).forEach((item, i) => {
    rules.push(item)
})

User.add({
    displayName: { type: String, required: true, unique: true, index: true },
    password: { type: Types.Password, required: true, initial: true },
    email: { type: Types.Email, required: true, initial: true, unique: true, index: true },
    role: { type: Types.Select, required: true, default: config.cms['default role'], options: rules, index: true }
})

User.schema.virtual('canAccessCapstone').get(function() { 
    return true
})

User.schema.virtual('userName').get(function() {
    return this.fullName
})

User.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

User.defaultColumns = 'displayName, email, role'

User.register()