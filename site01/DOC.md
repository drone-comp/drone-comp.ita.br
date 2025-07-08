# Portal Institucional do Instituto Tecnológico de Aeronáutica

Admin: admin@teste.io / p4ssw04d01

* test.1 - Keystone
* test.2 - Ghost


## Keystone

_Script de inicialização_ (start)

```javascript
#!/bin/sh

forever start -p `pwd` --pidFile `pwd`/site.pid -l log/forever.log -o log/out.log -e log/err.log -a keystone.js
```

_Script para finalização_ (stop)

```javascript
#!/bin/sh

forever stop $(cat ./site.pid)
```

## Estudo para o novo portal

### Atores e suas necessidades

Devem ser identificados os atores que irão acessar o portal e relacionar suas necessidades com relação àquele.

Este levantamento pode ser feito por meio de entrevistas, quando disponível, ou por dedução.

Por exemplo:

* Aspirantes à alunos, interesse em vestibular, inscrição, datas dos processos de admissão, etc.;
* Alunos correntes, interesse em serviços do campus, re-matrículas, materiais de aula, calendários de aula, mapas do campus, etc.;
* Ex-alunos, contatos com outros ex-alunos e professores, etc.;
* Professores, contatos com alunos e ex-alunos, dispor materiais de apoio;
* Administração, avisos, recebimento de solicitações, etc.;
* Órgãos governamentais, informações institucionais, etc.;
* Fontes de fomento, projetos de pesquisa, acompanhamento dos projetos, etc.;
* Público geral, informações institucionais, etc.

Estes são apenas exemplos. Para os casos de alunos, professores e administração e até ex-alunos é possível realizar entrevistas e descobrir as necessidades de cada um. Para as organizações externas é possível obter informações com as pessoas que lidam com elas diariamente. Outras podem ser deduzidas.

### Arquitetura da informação

Após o levantamento dos atores e suas necessidades, pode-se estruturar a informação para evitar repetições e facilitar a localização.

Para conteúdos estáticos, tais como as informações institucionais, uma estrutura de menus simples e funcional basta.

Para conteúdos dinâmicos, é necessário criar uma taxonomia. Esta taxonomia deve ser estruturada de acordo com a estrutura de informação de cada área. A taxonomia é aplicada ao portal por meio de _tags_, que são etiquetas associadas ao conteúdo dinâmico e que possibilitarão a busca rápida e a organização pelos tópicos definidos.

#### A criação de uma taxonomia

Em [_An Introduction to Taxonomies_](https://www.uxbooth.com/articles/introduction-to-taxonomies/) temos uma breve introdução ao tópico de taxonomias.

Para se criar uma taxonomia, sugerimos o seguinte processo:

1. O conteúdo deve ser relevante, atual e necessário;
1. Obter dos criadores de conteúdo sua organização ou agrupamento em categorias:
    * Tentar ter um número razoável de categorias - não mais que 50;
    * Cada categoria deve representar um conceito;
    * Eliminar redundâncias (por exemplo: _Estudos Avançados de Mecânica_ e _Mecânica Avançada_ devem ser uma categoria só);
    * Criar imagens para cada categoria ajuda a torná-las evidentes e unificar redundâncias:
        * As imagens devem ter cerca de 200x200 pixels.
1. Obter os conteúdos dinâmicos e aplicar a categorização criada;
    * Mais de uma pessoa deve aplicar a categorização;
    * No final deve-se avaliar se:
        * A categorização é abrangente e clara o suficiente para o conteúdo atual;
        * O público compreende e sabe usar a categorização.

Este portal oferece uma ferramenta gratuita para a realização deste estudo: [OptimalSort](https://www.optimalworkshop.com/optimalsort).

## Funcionalidades do portal

**Devemos lembrar sempre que o portal deve SEMPRE responder às necessidades de seu público e NUNCA refletir a organização da instituição, como se faz normalmente**.

#### Páginas institucionais

Páginas simples com conteúdo institucional.

#### Notícias

Páginas de conteúdo criado dinamicamente e publicadas para aparecerem numa linha de tempo onde as mais recentes aparecem em primeiro.

As páginas podem ser criadas por vários métodos, dependendo da plataforma:

* **HTML simples ou extendido** - o conteúdo é criado utilizando uma versão reduzida de **HTML**;
* **Markdown** - é um formato simples que o portal converte dinamicamente para **HTML**, porém é mais amigável para o criador de conteúdo formatar o documento sem usar os comandos de formatação do **HTNL**;
* **Editor WYSIWYG** - um editor que permite formatar dinamicamente o conteúdo com negritos, itálico, títulos, e o resultado é apresentado diretamente pelo editor.

#### Calendário de Eventos

Um registro temporal de eventos, passados e futuros, eventos estes que estarão ligados à uma notícia.

O calendário seria apresentado como uma folha dos dias do mês corrente, com navegação para os meses anteriores e seguintes, e os dias poderiam ser apresentados com uma agenda detalhada dos eventos do dia dispostos em ordem de horário.
