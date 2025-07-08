module.exports = {
    cms: {
        'mongo': 'mongodb://172.17.1.30:27017/portalita',
        'cookie secret': 'MEVlYiAtykSik1hZfEJgqg',

        'frontPageCategories': { categories: { $in: ['600456f37362146fd66e02fe'] } },
    },
    portal: {
        ita: {
            instituicao: {
                informacoesGerais: '/geral',
                visaoFuturo: '/post/visao-e-futuro',
                legislacao: '/post/legislacao',
                historiaValores: {
                    concepcao: '/post/a-concepcao',
                    construcao: '/post/construcao',
                    criacaoCursos: '/post/criacao-dos-cursos',
                    valoresITA: '/post/valores-do-ita',
                },
            },
            localizacao: {
                googleFrameMap: 'https://maps.google.com/maps?q=instituto%20tecnol%C3%B3gico%20de%20aeron%C3%A1utica&t=&z=13&ie=UTF8&iwloc=&output=embed',
                googleLinkMap: 'https://www.google.com/maps?ll=-23.210871,-45.875305&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=4460331161721657284',
            },
            organizacao: {
                organograma: '/post/organograma',
                reitoria: '/post/reitoria',
                congregacao: '/post/congregacao',
                divisoes: '/post/divisoes',
                proReitorias: {
                    graduacao: '/post/graduacao',
                    posGraduacao: '/post/pro-reitoria-de-pos-graduacao',
                    pesquisaRelacionamentoInstitucional: '/post/pro-reitoria-ipr',
                    administracao: '/post/pro-reitoria-de-administracao',
                },
            },
        },
        contato: {
            webmail: 'https://webmail.ita.br',
            contatos: {
                mail: 'mailto:contato@ita.br',
                comunicacao: 'mailto:comunicacao@ita.br',
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
    },
}