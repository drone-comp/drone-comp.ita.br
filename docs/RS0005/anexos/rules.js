/**
 * 
 * Regras de controle de acesso.
 * 
 */
module.exports = {
    cms: {
        'access rules': {
            'cn=admin,dc=portal,dc=ita,dc=br': {
                'archives': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'archives.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'archives.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
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
                'posts': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'posts.author': {
                    'reference:any': [ { key: 'author', value: '*' }, ],
                },
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: '*' }, ],
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
            'cn=editor,dc=portal,dc=ita,dc=br': { 
                'archives': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'archives.createdBy': {
                    'reference:any': [ { key: 'createdBy', value: '*' }, ],
                },
                'archives.updatedBy': {
                    'reference:any': [ { key: 'updatedBy', value: '*' }, ],
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
                'posts': {
                    'update:any': [ '*' ],
                    'delete:any': [ '*' ],
                },
                'posts.author': {
                    'reference:any': [ { key: 'author', value: '*' }, ],
                },
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: '*' }, ],
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
            'cn=editor-graduacao,dc=portal,dc=ita,dc=br': { 
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
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: 'graduacao' }, ],
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
            'cn=editor-pos-graduacao,dc=portal,dc=ita,dc=br': { 
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
                'posts.categories': {
                    'reference:any': [ { key: 'categories', value: 'pos-graduacao' }, ],
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
            'cn=user,dc=portal,dc=ita,dc=br': {
            },
        },
    }
}