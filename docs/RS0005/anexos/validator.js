/**
 * Regras de controle de acesso.
 */
 const
    ALLOW = true,
    DENY = false

module.exports = {
    cms: {
        'validation rules': {
            'editor-graduacao': { 
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'archived'] } },
                    { 'isIn': { valid: DENY, 'state': ['published'] } },
                ],
            },
            'revisor-graduacao': { 
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'published', 'archived'] } },
                ],
            },
    }
}