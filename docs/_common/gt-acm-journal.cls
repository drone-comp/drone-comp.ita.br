\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{gt-acm-journal}

\RequirePackage{etoolbox}

\DeclareOption*{\PassOptionsToClass{\CurrentOption}{acmart}}
\ProcessOptions\relax
\LoadClass{acmart}

% \RequirePackage[cmex10]{amsmath}
\RequirePackage{stfloats}
\RequirePackage{longtable}
\RequirePackage{booktabs}
\RequirePackage{array}
\RequirePackage{tablefootnote}
\RequirePackage{supertabular}
\RequirePackage{hhline}
\RequirePackage[toc,acronym,translate=babel,acronymlists={hidden}]{glossaries-extra}
\GlsXtrEnablePreLocationTag{~-~page:~}{~-~pages:~}
\glssetcategoryattribute{general}{textformat}{emph}
\glssetcategoryattribute{general}{glossnamefont}{emph}
\glssetcategoryattribute{acronym}{glossnamefont}{textbf}
\newglossarystyle{glsstylelong}{
    \setglossarystyle{long}
    \renewenvironment{theglossary}
    {\begin{supertabular}[l]{@{}p{\dimexpr 2cm-\tabcolsep}p{0.85\hsize}}}
    {\end{supertabular}}
}
\setabbreviationstyle[acronym]{short-long}
\setabbreviationstyle[main]{short-long}
\renewcommand{\glsxtrregularfont}[1]{\emph{\color{violet}#1}}
\renewcommand{\glsxtrabbreviationfont}[1]{\emph{\color{teal}#1}}
\newglossary[glhidden]{hidden}{glhidden}{glhiddenin}{Hidden Glossary}
\makeglossaries
\RequirePackage[backend=biber,style=ACM-Reference-Format]{biblatex}
\newrobustcmd*{\citefullauthor}{\AtNextCite{\DeclareNameAlias{labelname}{given-family}}\citeauthor}
\RequirePackage{graphicx}
% \RequirePackage[dvipsnames,svgnames,usenames,table]{xcolor}
% \RequirePackage{float}
\RequirePackage{caption}
\RequirePackage{multirow,multicol}
\RequirePackage{url,hyperref}
\RequirePackage[noabbrev,capitalise]{cleveref}
\RequirePackage{pgfplots,pgfplotstable}
\pgfplotsset{
    compat=1.17,
    colormap={bluegrad}{
        rgb(0cm)=(0,1,1); 
        rgb(1cm)=(0,.5,1)
    },
}
\RequirePackage{csvsimple}
\RequirePackage{calculator}
% \RequirePackage{orcid}

\RequirePackage[cache=false,newfloat]{minted}
\usemintedstyle{manni}
\setminted{
    xleftmargin=20pt,
    fontsize=\scriptsize,
    breaklines,
    breakanywhere,
    linenos=true,
}
\BeforeBeginEnvironment{code}{\medskip}
\AfterEndEnvironment{code}{\medskip}
\newenvironment{code}
{
    \captionsetup{type=listing}
}
{}

\RequirePackage{tcolorbox}
\BeforeBeginEnvironment{code}{
    \begin{tcolorbox}
}
\AfterEndEnvironment{code}{
    \end{tcolorbox}
}

\RequirePackage[style=portuguese]{csquotes}

\raggedbottom