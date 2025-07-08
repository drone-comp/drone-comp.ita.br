/**
 * Regras de controle de acesso.
 */
 const
    ALLOW = true,
    DENY = false

module.exports = {
    cms: {
        'validation rules': {
            'editor': { 
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'archived'] } },
                    { 'isIn': { valid: DENY, 'state': ['published'] } },
                ],
            },
            'revisor': { 
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'published', 'archived'] } },
                ],
            },
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
            'editor-pos-graduacao': {
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'archived'] } },
                    { 'isIn': { valid: DENY, 'state': ['published'] } },
                ],
            },
            'revisor-pos-graduacao': {
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'published', 'archived'] } },
                ],
            },
            'editor-ipr': {
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'archived'] } },
                    { 'isIn': { valid: DENY, 'state': ['published'] } },
                ],
            },
            'revisor-ipr': {
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'published', 'archived'] } },
                ],
            },
            'editor-geral': {
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'archived'] } },
                    { 'isIn': { valid: DENY, 'state': ['published'] } },
                ],
            },
            'revisor-geral': {
                'posts': [
                    { 'isIn': { valid: ALLOW, 'state': ['draft', 'published', 'archived'] } },
                ],
            },
        },
    }
}