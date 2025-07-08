/**
 * Regras de controle de acesso.
 */
module.exports = {
    cms: {
        'access rules': {
            'editor-graduacao': { 
                "$extend": [ 'editor-base' ],
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: 'graduacao' }, ],
                },
            },
            'revisor-graduacao': {
                "$extend": [ 'editor-graduacao' ],
            },
    }
}