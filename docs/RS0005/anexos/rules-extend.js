/**
 * 
 * Regras de controle de acesso.
 * 
 */
module.exports = {
    cms: {
        'access rules': {
            'editor-base': { 
                'archives': {
                    'update:any': [ '*' ],
                },
                'archives.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'archives.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
                'posts': {
                    'update:any': [ '*' ],
                },
                'posts.author': {
                    'reference:any': [ { key: 'author', value: '*' }, ],
                },
                'posts.downloads': {
                    'reference:any': [ { key: 'downloads', value: '*' }, ],
                },
                'posts.parent': {
                    'reference:any': [ { key: 'parent', value: '*' }, ],
                },
                'posts.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'posts.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
            },
            'editor-ipr': {
                "$extend": [ 'editor-base' ],
                'archives.categories': {
                    'reference:any': [ { key: 'categories', value: 'parcerias' }, ],
                },
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: 'parcerias' }, ],
                },
            },
        },
    }
}