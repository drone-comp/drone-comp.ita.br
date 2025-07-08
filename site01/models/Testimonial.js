var
    capstone = require('capstonejs'),
    config = require('config'),
    translations = require('capstone-intl'),
    Testimonial = new capstone.List('Testimonial', {
        track: true,
    })

Testimonial.add({
    position: { type: String, intl: true },
    name: { type: String },
    text: { type: String, intl: true },
})

Testimonial.schema.plugin(translations, { languages: config.cms['supported languages'], defaultLanguage: config.cms.language })

Testimonial.defaultColumns = 'text, name, position'

Testimonial.register()