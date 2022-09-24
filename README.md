# Site PPG-PO

O site utiliza [Hugo](https://github.com/gohugoio/hugo), e o Academics template, para gerar as páginas estáticas. A [documentação](https://wowchemy.com/docs/) é bem rápida de ser lida.

As páginas são construídas através de Markdown. Veja aqui os [elementos](https://wowchemy.com/docs/content/writing-markdown-latex/) disponíveis para construir seu conteúdo.

## Estrutura organizacional

O site está organizado seguindo o seguinte racional:
- *Home* - página principal livre, com **linguagem simplificada** para o **público geral**, candidatos e alunos
- *Admission* - deve conter todas as informações relativas ao processo de candidatura, i.e., **candidatos não alunos**, com as seguintes exceções:
  1. cursos oferecidos, pois são relativos ao programa
  2. linhas de pesquisa, pois são relativos à pesquisa
- *Research* - deve conter todas as informações relativas à pesquisa: linhas de pesquisa, projetos, publicações, teses defendidas e a serem defendidas, calendário de palestras e apresentações antigas
- *People* - deve apresentar as pessoas do programa, incluindo os alunos formados
- *Program* - deve apresentar as instituições, o programa, suas normas e informações relativas à administração, como notícias administrativas (notícias).

Caso existam muitas notícias administrativas, seria ideal acrescentar mais um campo geral *news* e subdividir as informações administrativas, das informações de pesquisa e para o público geral com tags.

## Instalação do ambiente

É necessário instalar o Hugo versão Extended. A versão do Hugo, normal ou extended, depende de cada distribuição linux. No Ubuntu, os pacotes correspondem a versão normal.

### Ubuntu

Baixe o binário da última versão do hugo, que tenha o nome extended, no [site de releases](https://github.com/gohugoio/hugo/releases), e.g.: [https://github.com/gohugoio/hugo/releases/download/v0.103.1/hugo_extended_0.103.1_linux-amd64.deb](https://github.com/gohugoio/hugo/releases/download/v0.103.1/hugo_extended_0.103.1_linux-amd64.deb)

Instale o pacote python normalmente com o apt: `sudo apt install ./hugo_extended_0.103.1_linux-amd64.deb `

**Importante**: você irá esquecer disto e irá aparecer vários erros. 😅 Você deve manter a versão do Hugo atualizada. Para isto, repita o processo anterior, porém com a versão mais nova.

## Github

Sempre que desejar submeter uma alteração, crie um branch, faça suas alterações e depois crie um pull request.

Considerando estar na raiz do projeto

```bash
# 1 - cria um branch com nome 'minha_alteracao' e faz checkout neste branch (salta para ele)
git checkout -b minha_alteracao

# 2 - faça as alterações desejadas
# 3 - commit
git commit -m "descrição curta das minhas alterações"

# 4 - outras alterações
# 5 - commit
git commit -m "descrição curta de outras alterações"

# 6 - submeter ao servidor
git push

# 7 - entre no site para fazer o pull request

# 8 - se quiser voltar à raiz (master) da árvore de branches
git branch master
```

Referências para aprender git:
- [Fast tutorial](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
- [1 hour video](https://www.youtube.com/watch?v=8JJ101D3knE)

## Testar a página

Para inicializar o servidor: `hugo server --disableFastRender`.

Nota: Se você utilizar WSL, lembre que ele só permite o uso de portas acima de 8080(se não me engano). Nesta caso especifique uma porta alta: `hugo server -p 8888 --disableFastRender`.

## Mais

Para atualização, veja [Update Guide](https://wowchemy.com/docs/update/) and [Release Notes](https://wowchemy.com/updates/).

Ferramenta para importar BibTeX [Hugo Academic CLI](https://github.com/wowchemy/hugo-academic-cli/)