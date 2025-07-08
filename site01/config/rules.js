/**
 * Regras de controle de acesso.
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
                'archives.categories': {
                    'reference:any': [ { key: 'categories', value: '*' }, ],
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
            'editor': { 
                "$extend": [ 'editor-base' ],
                'archives': {
                    'delete:any': [ '*' ],
                },
                'categories': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'categories.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'categories.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
                'menus': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'menus.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'menus.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
                'menus.post': {
                    'reference:any': [ { key: 'post', value: '*' }, ],
                },
                'menus.category': {
                    'reference:any': [ { key: 'category', value: '*' }, ],
                },
                'menus.items': {
                    'reference:any': [ { key: 'items', value: '*' }, ],
                },
                'posts': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: '*' }, ],
                },
                'sliders': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'sliders.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'sliders.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
                'sliders.post': {
                    'reference:any': [ { key: 'post', value: '*' }, ],
                },
                'spotlights': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'spotlights.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'spotlights.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
                'testimonials': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'testimonials.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'testimonials.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
            },
            'revisor': {
                "$extend": [ 'editor' ],
            },
            'editor-graduacao': { 
                "$extend": [ 'editor-base' ],
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: 'graduacao' }, ],
                },
            },
            'revisor-graduacao': {
                "$extend": [ 'editor-graduacao' ],
            },
            'editor-pos-graduacao': {
                "$extend": [ 'editor-base' ],
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: 'pos-graduacao' }, ],
                },
            },
            'revisor-pos-graduacao': {
                "$extend": [ 'editor-pos-graduacao' ],
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
            'revisor-ipr': {
                "$extend": [ 'editor-ipr' ],
            },
            'editor-geral': {
                "$extend": [ 'editor-base' ],
                'posts.categories': {
                    'reference:any': [ 
                        { key: 'categories', value: 'graduacao' }, 
                        { key: 'categories', value: 'pos-graduacao' }, 
                        { key: 'categories', value: 'parcerias' },
                    ],
                },
            },
            'revisor-geral': {
                "$extend": [ 'editor-geral' ],
            },
            'admin': {
                "$extend": [ 'editor' ],
                'users': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'users.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'users.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
                },
            },
        },
    }
}