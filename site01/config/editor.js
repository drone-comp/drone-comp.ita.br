const
    EDITOR_PLUGINS = 'advlist autolink lists link image charmap print preview hr anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking save table contextmenu directionality emoticons template paste textcolor colorpicker textpattern',
    EDITOR_TOOLBAR1 = 'styleselect | bold italic | backcolor forecolor | alignleft aligncenter alignright alignjustify | indent outdent',
    EDITOR_TOOLBAR2 = ' template | link image | preview | code'


module.exports = {
    cms: {
        'wysiwyg additional options': { 
            extended_valid_elements : 'pre[*]',
            plugins: EDITOR_PLUGINS,
            toolbar1: EDITOR_TOOLBAR1,
            toolbar2: EDITOR_TOOLBAR2,
            table_default_attributes: {
                class: 'table',
            },
            table_default_styles: {},
            relative_urls: false,
            remove_script_host: true,
            document_base_url: '/',
            content_css: [
                '/static/css/library/bootstrap/bootstrap.min.css',
                '/static/css/library/animate/animate.min.css',
                '/static/css/fonts/awesome/css/font-awesome.css',
                '/static/css/fonts/icomoon/style.css',
                'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
                '/static/css/theme.css',
                '/static/css/theme-elements.css',
                '/static/css/google-maps.css',
                '/static/css/prism.css',
                '/static/css/color/blue.css',
                '/static/js/library/jquery/slider-revolution/css/settings.css',
                '/static/core/css/options.css',
            ],
            templates: [
                {title: 'Tabela Simples', description: 'Tabela padrão Portal ITA', url: '/static/templates/table-1.html'},
                {title: 'Tabela Listrada', description: 'Tabela padrão Portal ITA listrada', url: '/static/templates/table-2.html'},
                {title: 'Lista com Setas', description: 'Lista padrão Portal ITA com setas', url: '/static/templates/list-1.html'},
                {title: 'Lista com Pontos', description: 'Lista padrão Portal ITA com pontos', url: '/static/templates/list-2.html'},
                {title: 'Lista com Marcas', description: 'Lista padrão Portal ITA com Marcas', url: '/static/templates/list-3.html'},
                {title: 'Lista com Sinais "+"', description: 'Lista padrão Portal ITA com Sinais "+"', url: '/static/templates/list-4.html'},
                {title: 'Lista com Sinais "-"', description: 'Lista padrão Portal ITA com Sinais "-"', url: '/static/templates/list-5.html'},
                {title: 'Lista Numerada', description: 'Lista padrão Portal ITA Numerada', url: '/static/templates/list-6.html'},
                // {title: 'Abas Horizontais', description: 'Abas padrão Portal ITA horizontais', url: '/static/templates/tab-1.html'},
                // {title: 'Abas Verticais', description: 'Abas padrão Portal ITA verticais', url: '/static/templates/tab-2.html'},
            ],
        },
    },
}