require('app-module-path').addPath(__dirname + '/helpers')

module.exports = {
    cms: {
        'port': 3003,
        
        'mongo': 'mongodb://wmpgfis:Wm%40Pgf1$@localhost:27017/DB_PGFIS',
        'cookie secret': 'MEVlYiAtykSik1hZfEJgqg',

        'frontPageCategories': { categories: { $in: ['600752c79973ae058e39d84d'] } },

        // 'ldap server': {
        //     url: 'ldaps://161.24.23.215:636',
        // },
        'ldap auth user': 'cn=ADMIN-DO-PORTAL,ou=internal,ou=users,dc=ita,dc=br',
        'ldap auth password': 'SENHA-DO-ADMIN-DO-PORTAL-NO-LDAP',
        'ldap query base': '|(&(objectClass=brPerson)(|(employeeType=professor)(employeeType=funcionario)))(uid=cursino)',
        'ldap query user': {
            scope: 'sub',
            attrs: '*',
        },
        'ldap query user id': 'uid',
        'ldap query user class': '(|(&(objectClass=brPerson)(|(employeeType=professor)(employeeType=funcionario)))(uid=cursino))',
        // 'ldap query role': {
        //     filter: '(objectClass=groupOfNames)',
        //     scope: 'sub',
        //     attrs: '*',
        // },
    },
    portal: {
        home: 'http://www.ita.br',
        contato: {
            contatos: {
                mail: 'mailto:contato@ita.br',
                comunicacao: 'mailto:lkteles@ita.br',
                nome: 'Profa. Lara Kühl Teles<br/>Coordenadora da PG-FIS<br/>telefone (12) 3305-8495, sala FO-241, 2o. andar',
                vestibular: 'mailto:vestita@ita.br',
                ramais: 'http://www.portal2.ita.br/contatos',
                telefones: '/post/contatos',
                foneAdministracao: '(12) 3947 5736',
                foneComunicacao: '(12) 3947 6926'
            },
            privacidade: {
                politica: '/post/politica-de-privacidade',
                cookies: '/post/politica-de-cookies',
            },
            termos: {
                uso: '/post/termo-de-uso',
            },
        },
        email: 'mailto:lucianalgs@ita.br',
        color: 'green',
        'view home': 'home',
    },
    cookies: {
        enabled: true,
    },
}
