\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{gt-report}

\RequirePackage{etoolbox}

\RequirePackage{ifthen}
\newboolean{gt:article}
\newboolean{gt:poster}
\newboolean{gt:report}
\newboolean{gt:glossaries}


\newif\ifanullb
\newif\ifanull
\newif\ifaeins
\newif\ifazwei
\newif\ifadrei

\newcount\xkoord
\newcount\ykoord
\newcount\xscale
\newcount\yscale

\DeclareOption{a0b}{
    \anullbtrue
    \xkoord=2592 % big points (1 bp=1/72 inch)
    \ykoord=3666 % big points (1 bp=1/72 inch)
    \xscale=23
    \yscale=23
}
\DeclareOption{a0}{
    \anulltrue\anullbfalse
    \xkoord=2380 % big points (1 bp=1/72 inch)
    \ykoord=3368 % big points (1 bp=1/72 inch)
    \xscale=25
    \yscale=25
}
\DeclareOption{a1}{
    \aeinstrue\anullbfalse
    \xkoord=1684 % big points (1 bp=1/72 inch)
    \ykoord=2380 % big points (1 bp=1/72 inch)
    \xscale=3
    \yscale=3
}
\DeclareOption{a2}{
    \azweitrue\anullbfalse
    \xkoord=1190 % big points (1 bp=1/72 inch)
    \ykoord=1684 % big points (1 bp=1/72 inch)
    \xscale=4
    \yscale=4
}
\DeclareOption{a3}{
    \adreitrue\anullbfalse
    \xkoord=842  % big points (1 bp=1/72 inch)
    \ykoord=1190 % big points (1 bp=1/72 inch)
    \xscale=6
    \yscale=6
}

\newtoggle{portrait}
\newtoggle{preview}
\newtoggle{calendars}
\newtoggle{toc}
\newtoggle{figures}
\newtoggle{formulas}
\newtoggle{tables}
\newtoggle{listings}
\newtoggle{algorithms}

\togglefalse{portrait}
\togglefalse{preview}
\togglefalse{calendars}
\togglefalse{toc}
\togglefalse{figures}
\togglefalse{formulas}
\togglefalse{tables}
\togglefalse{listings}
\togglefalse{algorithms}

\DeclareOption{portrait}{
    \toggletrue{portrait}
}
\DeclareOption{preview}{
    \toggletrue{preview}
}
\DeclareOption{calendars}{
    \toggletrue{calendars}
}
\DeclareOption{toc}{
    \toggletrue{toc}
}
\DeclareOption{figures}{
    \toggletrue{figures}
}
\DeclareOption{formulas}{
    \toggletrue{formulas}
}
\DeclareOption{tables}{
    \toggletrue{tables}
}
\DeclareOption{listings}{
    \toggletrue{listings}
}
\DeclareOption{algorithms}{
    \toggletrue{algorithms}
}

\DeclareOption{article}{
    \setboolean{gt:article}{true}
    \setboolean{gt:poster}{false}
    \setboolean{gt:report}{false}
}
\DeclareOption{poster}{
    \setboolean{gt:poster}{true}
    \setboolean{gt:article}{false}
    \setboolean{gt:report}{false}
}
\DeclareOption{report}{
    \setboolean{gt:report}{true}
    \setboolean{gt:article}{false}
    \setboolean{gt:poster}{false}
}
\newif\if@oneside\@onesidefalse
\DeclareOption{oneside}{\PassOptionsToClass{\CurrentOption}{report}\@onesidetrue}%
\DeclareOption{twoside}{\PassOptionsToClass{\CurrentOption}{report}}
\DeclareOption{openright}{\PassOptionsToClass{\CurrentOption}{report}}
\DeclareOption{openany}{\PassOptionsToClass{\CurrentOption}{report}}
\DeclareOption{glossaries}{\setboolean{gt:glossaries}{true}}
\DeclareOption{noglossaries}{\setboolean{gt:glossaries}{false}}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{report}}
\ExecuteOptions{report,noglossaries}
\ProcessOptions\relax
\ifthenelse{\boolean{gt:article}\OR\boolean{gt:poster}}{
    \LoadClass{article}
}
{
    \LoadClass{report}
}

\RequirePackage[portuguese,english]{babel}

\RequirePackage[backend=biber,style=alphanumeric-hybrid,citestyle=numeric]{biblatex}
\newrobustcmd*{\citefullauthor}{\AtNextCite{\DeclareNameAlias{labelname}{given-family}}\citeauthor}

\RequirePackage{biblatex-ext-tabular}

\RequirePackage[T1]{fontenc}
\tracinglostchars=2

\RequirePackage[utf8]{inputenc}

\RequirePackage{multirow}

\RequirePackage[dvipsnames,svgnames,usenames,table]{xcolor}

\RequirePackage{longtable}

\RequirePackage{hhline}

\RequirePackage{pifont}

\RequirePackage{datetime}

\RequirePackage{pgfplotstable}
\pgfplotsset{
    compat=1.17,
    colormap={bluegrad}{
        rgb(0cm)=(0,1,1); 
        rgb(1cm)=(0,.5,1)
    },
}
\setkeys{Gin}{draft=false}

\RequirePackage{subfigure}

\RequirePackage{subfiles}

\RequirePackage{pdfpages}

\RequirePackage{amsmath}

\RequirePackage{amssymb}

\RequirePackage{bm}

\RequirePackage{calculator}

\RequirePackage{array,booktabs}

\RequirePackage{footnote}

\RequirePackage{tablefootnote}

\RequirePackage[multiple]{footmisc}
\renewcommand\thefootnote{\textcolor{red}{\roman{footnote}}}

\RequirePackage[bf,sf,footnotesize,indent]{caption}

\RequirePackage{titlesec}
\RequirePackage{titling}
\setlength{\droptitle}{-8cm}
\ifthenelse{\boolean{gt:article}}
{
    \parindent 1.27cm
    \parskip   6pt

    \flushbottom

    % captions
    %updated 2017. Change deprecated caption2 to caption package
    \setlength{\captionmargin}{0.8cm}
    \renewcommand{\captionfont}{\sffamily\footnotesize\bfseries}
    %\renewcommand{\captionlabeldelim}{.}
    \captionsetup{labelsep=period}

    % font
    \RequirePackage{times}

    \renewcommand{\normalsize}{\@setfontsize\normalsize\@xiipt\@xivpt}
    \newcommand{\XIIIPT}{\@setfontsize\xiiipt{13}{17}}
    \newcommand{\XVIPT}{\@setfontsize\xvipt{16}{20}}

    % new commands
    \newcounter{instn}
    \setcounter{instn}{1}
    \newcommand{\instnum}{\arabic{instn}}
    \newcommand{\inst}[1]{\ensuremath{^{#1}}}
    \newcommand{\nextinstitute}{\\\mbox{}\\[-6pt] \addtocounter{instn}{1}\inst{\instnum}}
    \newcommand{\email}[1]{\\\mbox{}\\[-6pt]\footnotesize\texttt{#1}}
    \renewcommand{\and}{, }

    % itens
    \setlength\leftmargini   {1.27cm}
    \setlength\leftmargin    {\leftmargini}
    \setlength\leftmarginii  {\leftmargini}
    \setlength\leftmarginiii {\leftmargini}
    \setlength\leftmarginiv  {\leftmargini}
    \setlength  \labelsep    {.5em}
    \setlength  \labelwidth  {\leftmargini}
    \addtolength\labelwidth  {-\labelsep}
    \def\@listI{\leftmargin\leftmargini
                \parsep 0\p@ \@plus1\p@ \@minus\p@
                \topsep 0\p@ \@plus2\p@ \@minus4\p@
                \itemsep0\p@}
    \let\@listi\@listI
    \@listi
    \def\@listii {\leftmargin\leftmarginii
                \labelwidth\leftmarginii
                \advance\labelwidth-\labelsep
                \topsep    0\p@ \@plus2\p@ \@minus\p@}
    \def\@listiii{\leftmargin\leftmarginiii
                \labelwidth\leftmarginiii
                \advance\labelwidth-\labelsep
                \topsep    0\p@ \@plus\p@\@minus\p@
                \parsep    \z@
                \partopsep \p@ \@plus\z@ \@minus\p@}

    % sections
    % \renewcommand\section{\@startsection{section}{1}{\z@}%
    %     {-6\p@ \@plus -4\p@ \@minus -4\p@}%
    %     {0\p@ \@plus 4\p@ \@minus 4\p@}%
    %     {\normalfont\XIIIPT\bfseries\boldmath
    %     \rightskip=\z@ \@plus 8em\pretolerance=10000 }}

    % \renewcommand\subsection{\@startsection{subsection}{2}{\z@}%
    %     {-6\p@ \@plus -4\p@ \@minus -4\p@}%
    %     {0\p@ \@plus 4\p@ \@minus 4\p@}%
    %     {\normalfont\normalsize\bfseries\boldmath
    %     \rightskip=\z@ \@plus 8em\pretolerance=10000 }}

    % \titlelabel{\thetitle.\hspace{1ex}}

    % first page

    \pagestyle{empty}

    \newcommand{\authortag}[1]{$^{#1}$}

    \def\address#1{\gdef\@address{#1}}
    
    \def\@maketitle{\newpage
     %\null % isso dava um espaco extra antes do title
     \begin{center}
       %\vglue -6pt
    %   \vspace*{12pt}
    \vspace*{-.7cm}
      {\XVIPT\bf\@title\par}
       \vglue 6pt plus 3pt minus 3pt
      {\normalsize
       \textbf{\begin{tabular}[t]{c}\@author\end{tabular}}\par}
       \vglue 6pt plus 3pt minus 3pt
      \@ifundefined{@address}{}{
        {\normalsize
         \begin{tabular}[t]{c}\inst{\instnum}\@address\end{tabular}\par}
      }
       \vglue 6pt plus 3pt minus 3pt
       \end{center}\par
    }
    \let\maketitleOLD\maketitle
    \renewcommand{\maketitle}{\maketitleOLD\thispagestyle{empty}}

    \renewenvironment{abstract}{%
        \list{}{\advance\topsep by6pt\relax%\small
        \leftmargin=0.8cm
        \labelwidth=\z@
        \listparindent=\z@
        \itemindent\listparindent
        \rightmargin\leftmargin}\item[\hskip\labelsep
                                    \bfseries\itshape Abstract.]\itshape}%
        {\endlist}

    \newenvironment{resumo}{%
        \list{}{\advance\topsep by6pt\relax%\small
        \leftmargin=0.8cm
        \labelwidth=\z@
        \listparindent=\z@
        \itemindent\listparindent
        \rightmargin\leftmargin}\item[\hskip\labelsep
                                    \bfseries\itshape Resumo.]\itshape}%
        {\endlist}

}

\ifthenelse{\boolean{gt:poster}}{
    \ifanullb
        \setlength{\paperwidth}{129.3cm} %% 36 * sqrt(2) in
        \setlength{\paperheight}{91.4cm} %% 36 in
        \setlength{\textwidth}{119.3cm} %% paperwidth - (5cm + 5cm)
        \setlength{\textheight}{81.4cm} %% paperheight - (5cm + 5cm)
    \else\ifanull
            \setlength{\paperwidth}{118.82cm}
            \setlength{\paperheight}{83.96cm}
            \setlength{\textwidth}{108.82cm} %% paperwidth - (5cm + 5cm)
            \setlength{\textheight}{73.96cm} %% paperheight - (5cm + 5cm)
        \else\ifaeins
                \setlength{\paperwidth}{83.96cm}
                \setlength{\paperheight}{59.4cm}
                \setlength{\textwidth}{79.96cm}
                \setlength{\textheight}{55.4cm}
            \else\ifazwei
                    \setlength{\paperwidth}{59.4cm}
                    \setlength{\paperheight}{41.98cm}
                    \setlength{\textwidth}{55.4cm}
                    \setlength{\textheight}{37.98cm}
                \else\ifadrei
                        \setlength{\paperwidth}{41.98cm}
                        \setlength{\paperheight}{29.7cm}
                        \setlength{\textwidth}{37.98cm}
                        \setlength{\textheight}{25.7cm}
                    \else\relax
                    \fi
                \fi
            \fi
        \fi
    \fi
    
    
    \iftoggle{portrait}
    {
        \newdimen\tausch
        \setlength{\tausch}{\paperwidth}
        \setlength{\paperwidth}{\paperheight}
        \setlength{\paperheight}{\tausch}
        \setlength{\tausch}{\textwidth}
        \setlength{\textwidth}{\textheight}
        \setlength{\textheight}{\tausch}
    }
    {
        \relax
    }
    
    %% Setting proper dimensions for the HP2500CP printer (height = 36 in)
    %%   Landscape: unprintable areas
    %%   	L: 27.6mm
    %%   	R: 27.1mm
    %%   	T: 18.4mm
    %%   	B: 18.1mm
    
    
    \voffset -1in
    \hoffset -1in
    
    \setlength{\headheight}{0 cm}
    \setlength{\headsep}{0 cm}
    \setlength{\topmargin}{5 cm} %% 3 cm for unprintable at top
                    %% (landscape) + 2 cm from border
    \setlength{\oddsidemargin}{5 cm} %% 3 cm for unprintable at left
                        %% (landscape) + 2 cm from border
    \setlength{\topskip}{0 cm}
    
    \input{a0size.sty}
    
    \renewcommand{\tiny}{\fontsize{12}{14}\selectfont}
    \renewcommand{\scriptsize}{\fontsize{14.4}{18}\selectfont}   
    \renewcommand{\footnotesize}{\fontsize{17.28}{22}\selectfont}
    \renewcommand{\small}{\fontsize{20.74}{25}\selectfont}
    \renewcommand{\normalsize}{\fontsize{24.88}{30}\selectfont}
    \renewcommand{\large}{\fontsize{29.86}{37}\selectfont}
    \renewcommand{\Large}{\fontsize{35.83}{45}\selectfont}
    \renewcommand{\LARGE}{\fontsize{43}{54}\selectfont}
    \renewcommand{\huge}{\fontsize{51.6}{64}\selectfont}
    \renewcommand{\Huge}{\fontsize{61.92}{77}\selectfont}
    \newcommand{\veryHuge}{\fontsize{74.3}{93}\selectfont}
    \newcommand{\VeryHuge}{\fontsize{89.16}{112}\selectfont}
    \newcommand{\VERYHuge}{\fontsize{107}{134}\selectfont}
    
    \setlength\smallskipamount{6pt plus 2pt minus 2pt}
    \setlength\medskipamount{12pt plus 4pt minus 4pt}
    \setlength\bigskipamount{24pt plus 8pt minus 8pt}
    
    \setlength\abovecaptionskip{25pt}
    \setlength\belowcaptionskip{0pt}
    \setlength\abovedisplayskip{25pt plus 6pt minus 15 pt}
    \setlength\abovedisplayshortskip{0pt plus 6pt}
    \setlength\belowdisplayshortskip{13pt plus 7pt minus 6pt}
    \setlength\belowdisplayskip\abovedisplayskip
    
    \normalsize

    \RequirePackage{multicol}
    \columnsep=100pt
    \columnseprule=3pt    
}

\ifthenelse{\boolean{gt:article}\OR\boolean{gt:poster}}
{

}
{
    \renewcommand{\maketitlehooka}
    {
        \par\begin{center} 
            \includegraphics[width = 20mm]{brasao-republica}\\
            \large
            \textbf{SERVIÇO PÚBLICO FEDERAL\\
            DEPARTAMENTO DE CIÊNCIA E TECNOLOGIA AEROESPACIAL\\
            INSTITUTO TECNOLÓGICO DE AERONÁUTICA}
            \normalsize
        \end{center}
        \vspace*{4cm}
        \par\begin{center} \includegraphics[width = 40mm]{logo-ita} \end{center}
        \vspace*{4cm}
    }
    \renewcommand{\maketitlehookb}
    {
        \par\begin{center}\Large \lineskip 0.5em \textbf{\insTT} \end{center}
        \par\begin{center}\large \lineskip 0.5em \depT \end{center}
    }
    \renewcommand{\maketitlehookc}
    {
        \vspace*{4cm}
    }
    \begin{titlingpage}
        \pretitle{\begin{center}\LARGE}
        \posttitle{\par\end{center}\vskip 0.5em}
        \preauthor{\begin{center}
                \large \lineskip 0.5em
                \begin{tabular}[t]{c}}
        \postauthor{\end{tabular}\par\end{center}}
        \predate{\begin{center}\large}
        \postdate{\par\end{center}}
    \end{titlingpage}

    %\titleformat{\chapter}{\scshape\bfseries\huge\color{Blue}}
    \titleformat*{\section}{\scshape\bfseries\LARGE\color{MidnightBlue}}
    \titleformat*{\subsection}{\scshape\bfseries\Large\color{NavyBlue}}
    \titleformat*{\subsubsection}{\scshape\bfseries\large\color{RoyalBlue}}
    \titleformat{\paragraph}[hang]
        {\normalfont\small\scshape\bfseries\color{Cerulean}}{\theparagraph}{1em}{}
    \titlespacing*{\paragraph}{0pt}{3.25ex plus 1ex minus 0.2ex}{0.5em}
    \titleformat{\subparagraph}[hang]
        {\normalfont\small\scshape\color{Cyan}}{\thesubparagraph}{1em}{}
    \titlespacing*{\subparagraph}{0pt}{3.25ex plus 1ex minus 0.2ex}{0.5em}

    \RequirePackage{titletoc}
    \titlecontents{section}[2.33em]
        {\medskip\mdseries}
        {\contentslabel[\hfill\thecontentslabel.]{2.33em}\quad}
        {}
        {\hfill\thecontentspage}
}

\RequirePackage{algorithm2e}

\RequirePackage[section]{placeins}

\RequirePackage{enumitem}

\ifthenelse{\boolean{gt:glossaries}}
{
    \RequirePackage[toc,acronym,translate=babel,acronymlists={hidden}]{glossaries-extra}
    \GlsXtrEnablePreLocationTag{~-~page:~}{~-~pages:~}
    \glssetcategoryattribute{general}{textformat}{emph}
    \glssetcategoryattribute{general}{glossnamefont}{emph}
    \glssetcategoryattribute{acronym}{glossnamefont}{textbf}
    \newglossarystyle{glsstylelong}{
        \setglossarystyle{long}
        \renewenvironment{theglossary}
        {\begin{longtable}[l]{@{}p{\dimexpr 2cm-\tabcolsep}p{0.8\hsize}}}
        {\end{longtable}}
    }
    \setabbreviationstyle[acronym]{short-long}
    \setabbreviationstyle[main]{short-long}
    \renewcommand{\glsxtrregularfont}[1]{\emph{\color{violet}#1}}
    \renewcommand{\glsxtrabbreviationfont}[1]{\emph{\color{teal}#1}}
    \newglossary[glhidden]{hidden}{glhidden}{glhiddenin}{Hidden Glossary}
}

\RequirePackage{hyperref}

\RequirePackage[capitalize,noabbrev,nameinlink,brazilian]{cleveref}
\crefdefaultlabelformat{#2\textit{#1}#3}

\RequirePackage{ifdraft}
\newsavebox\draftbox
\savebox\draftbox{\tikz[color=red,opacity=0.25]\node{\Huge ESBOÇO};}
\ifdraft
{
    \RequirePackage{draftwatermark}
    \SetWatermarkLightness{0.25}
    \SetWatermarkText{\usebox\draftbox}
}

\RequirePackage{cancel}

\RequirePackage{multiaudience}
\SetNewAudience{printed}
\SetNewAudience{digital}

\RequirePackage{wrapfig}

\RequirePackage{float}

\RequirePackage{newfloat}

\RequirePackage{morewrites}

\RequirePackage{bookmark}

\RequirePackage{nameref}

\RequirePackage{lmodern}

\RequirePackage{tcolorbox}
\BeforeBeginEnvironment{code}{
    \begin{tcolorbox}
}
\AfterEndEnvironment{code}{
    \end{tcolorbox}
}

\iftoggle{listings}
{
    \RequirePackage[cache=false,newfloat]{minted}
    %% \usemintedstyle{manni}
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
}

\RequirePackage[autostyle]{csquotes}
\DeclareQuoteStyle[quotes]{portuguese}
    {\itshape\mkportugueseopenquote{\guillemotleft}}
    {\mkportugueseclosequote{\guillemotright}}
    {\itshape\textquotedblleft}
    {\textquotedblright}

\ifthenelse{\boolean{gt:article}\OR\boolean{gt:report}}{
    \RequirePackage{geometry}        

    \geometry{a4paper,top=3.5cm,left=3cm,right=2cm,bottom=3cm}
}
{

}

\RequirePackage{epigraph}

\ifthenelse{\boolean{gt:article}\OR\boolean{gt:poster}}
{

}
{
    \RequirePackage{fancyhdr}

    \RequirePackage{pdflscape}

    \RequirePackage{attachfile}

    \iftoggle{listings}
    {
        \SetupFloatingEnvironment{listing}{name=Código Fonte}

        \addto\captionsbrazil
        {
        \renewcommand*{\listlistingname}{Lista de Códigos-fonte}
        \renewcommand*{\listingname}{Listagem}
        }
    }

    \let\l@listing\l@figure
    \patchcmd{\l@listing}{\cftfigpresnum}{\cftlistingpresnum}{}{}
    \newcommand\cftlistingpresnum{\listingname~}

    % \setlength{\@fptop}{0pt}
    \setlength{\parskip}{1em}

    \graphicspath{{./anexos/}}
    \DeclareGraphicsExtensions{.pdf,.png,.jpg,.jpeg}

    \DeclareFloatingEnvironment[fileext=frm,placement={!ht},listname={Lista de Fórmulas},name=Fórmula]{formula}

    \newdateformat{monthyeardate}{\monthnameportuguese[\THEMONTH] de [\THEYEAR]}

    \newcommand{\institution}[1]{\gdef\insTT{#1}}
    \newcommand{\insTT}{}

    \newcommand{\department}[1]{\gdef\depT{#1}}
    \newcommand{\depT}{}

    \newcounter{usCAs}
    \newcounter{usTasks}

    \newcommand{\usCopy}[4]
    {
        \clearpage
        \ifthenelse{\boolean{gt:glossaries}}
        {
            \glsresetall
        }

        \ifthenelse{\equal{#4}{META}}
        {
            \chapter{#2 (META)}
        }
        {
            \chapter{#2}
        }\label{us:#1}

        \IfFileExists{#3/#1/_relatorio.tex}
        {
            \subfile{#3/#1/_relatorio.tex}
        }
        {
            \ClassWarning{GT}{FILE #3/#1/_relatorio.tex NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }

        \newpage
    }

    \newenvironment{usIndex}
    {
        \newcommand{\usIndexItem}[4]
        {
            \hline
            \textbf{\nameref{us:##1}} & ##2 & ##3 & ##4 & \pageref{us:##1} \\
        }

        \begin{table}[ht!]
            \label{tab:sprint-backlog}
            \renewcommand{\arraystretch}{1.2}
            \centering
            \begin{tabular}{ | c | p{60mm} | c | p{20mm} | r | }
                \hline
                    \multicolumn{5}{ | c | }{\cellcolor{black} \color{white} \textbf{Arquivo(s)}} \\
                \hline
                    Arquivo & Resumo & TRL & Resp. & Pág \\
                \hline
    }
    {
                \hline
            \end{tabular}
            \caption{Tópicos de Pesquisa}
        \end{table}
    }

    \newenvironment{researchIndex}
    {
        \newcommand{\researchIndexItem}[3]
        {
            \hline
                \textbf{##1} & ##2 & \pageref{##3} \\
        }

        \begin{table}[ht!]
            \caption{Linhas de Pesquisa}
            \label{tab:research-backlog}
            \renewcommand{\arraystretch}{1.2}
            \centering
            \begin{tabular}{ | p{60mm} | p{20mm} | r | }
                \hline
                    Linha de Pesquisa & Resp. & Pág \\
                \hline
    }
    {
                \hline
            \end{tabular}
        \end{table}
    }

    \newenvironment{researchAccounting}
    {
        \newcommand{\researchAccountingItem}[3]
        {
            ##1 & \textbf{##2} & \textit{##3} \\
        }

        \begin{table}[ht!]
            \caption{Balanço Atual da Linha de Pesquisa}
            \renewcommand{\arraystretch}{1.2}
            \centering
            \begin{tabular}{ | p{100mm} | c | c | }
                \hline
                    Produto do Projeto & Estado & Arquivos relacionadas \\
                \hline
    }
    {
                \hline
            \end{tabular}
        \end{table}
    }
}

\renewcommand{\mkbegdispquote}[2]{\itshape}
    
\newcommand{\cmark}{\ding{51}}
\newcommand{\xmark}{\ding{55}}

\def\Ok{\color{green}\ding{52}\color{black}}
\def\NotOk{\color{red}\ding{55}\color{black}}

\ifthenelse{\boolean{gt:article}\OR\boolean{gt:report}}
{
    \RequirePackage[page,title]{appendix}
    % \makeatletter
        \patchcmd{\cftsecfillnum}{\makebox[\@pnumwidth][\cftpnumalign]}{}{}{}
        \patchcmd{\cftsubsecfillnum}{\makebox[\@pnumwidth][\cftpnumalign]}{}{}{}
        \patchcmd{\cftsubsubsecfillnum}{\makebox[\@pnumwidth][\cftpnumalign]}{}{}{}
        \patchcmd{\cftparafillnum}{\makebox[\@pnumwidth][\cftpnumalign]}{}{}{}
        \patchcmd{\cftsubparafillnum}{\makebox[\@pnumwidth][\cftpnumalign]}{}{}{}
    % \makeatother
    \renewcommand{\appendixname}{Apêndice}
    \renewcommand{\appendixtocname}{Apêndices e Anexos}
    \renewcommand{\appendixpagename}{Apêndices e Anexos}

    \newcommand{\usAnnex}[3]{
        \IfFileExists{#3/#1/_annex.tex}
        {
            \clearpage

            \chapter{#2}\label{us:#1-annex}

            \input{#3/#1/_annex.tex}
            \clearpage
        }
        {
            \ClassWarning{GT}{FILE #3/#1/_annex.tex NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }
    }

    \newcommand{\presentation}[3]
    {
        \clearpage

        \IfFileExists{#1}
        {
            \clearpage
            
            \includepdf[pages=-,offset=5.25mm -20mm,pagecommand={\section{#2}\label{#3}},nup=2x2,landscape=true,delta=10 15,frame=true,scale=0.68]{#1}
            \clearpage
        }
        {
            \ClassWarning{GT}{FILE #1 NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }
    }

    \newcommand{\downloadAnnex}[3]
    {
        \IfFileExists{#1}
        {
            \section{#2}\label{#3}

            Posicione o cursor do \textit{mouse} sobre o ícone \noattachfile[icon=Paperclip] para obter uma cópia do arquivo anexo.
        
            \attachfile[icon=Paperclip,description={#2}]{#1} - \textit{#2}
            \clearpage
        }
        {
            \ClassWarning{GT}{FILE #1 NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }
    }

    \newcommand{\notebook}[3]
    {
        \IfFileExists{#1}
        {
            \clearpage
        
            \includepdf[pages=-,offset=5.25mm -20mm,pagecommand={\section{#2}\label{#3}},nup=1x2,landscape=true,delta=10 15,frame=true,scale=0.68]{#1}
            \clearpage
        }
        {
            \ClassWarning{GT}{FILE #1 NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }
    }

    \newcommand{\annex}[3]
    {
        \IfFileExists{#1}
        {
            \clearpage
        
            \includepdf[pages=-,offset=5.25mm -20mm,pagecommand={\section{#2}\label{#3}},nup=1x1,landscape=false,delta=10 15,frame=true,scale=.65]{#1}
            \clearpage
        }
        {
            \ClassWarning{GT}{FILE #1 NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }
    }

    \newcommand{\annexLandscape}[3]
    {
        \IfFileExists{#1}
        {
            \clearpage
        
            \includepdf[pages=-,offset=5.25mm -20mm,,pagecommand={\section{#2}\label{#3}},nup=1x1,landscape=true,delta=10 15,frame=true,scale=.65]{#1}
            \clearpage
        }
        {
            \ClassWarning{GT}{FILE #1 NOT FOUND}{O arquivo deve ser salvo na pasta de anexos da sua atividade - confira nome e caminho para o arquivo}
        }
    }

    \newenvironment{inlineAnnex}
    {
        \newcommand{\inlineAnnexItem}[2]
        {
            \section{##1}\label{##2}
        }
    }{}{}

    \newenvironment{usHistory}[2]
    {
        \def\usHistoryTitle{#1}
        \def\usHistoryLabel{#2}

        \newcommand{\usHistoryItem}[4]
        {
            \hline
            \textbf{##1} & ##2 & ##3 & ##4 \\
        }

        \begin{table}[ht!]
            \renewcommand{\arraystretch}{1.2}
            \centering
            \caption{\usHistoryTitle}\label{\usHistoryLabel}
            \begin{tabular}{ | p{25mm} | p{50mm} | c | r | }
                \hline
                    \multicolumn{4}{ | c | }{\cellcolor{black} \color{white} \textbf{\usHistoryTitle}} \\
                \hline
                    \multicolumn{1}{| c | }{Arquivo} & Descrição & Data & Respons. \\
                \hline
    }
    {
                \hline
            \end{tabular}
        \end{table}
    }

    \ifthenelse{\boolean{gt:glossaries}}
    {
        \addto\captionsbrazil
        {
            \renewcommand*{\glossaryname}{Glossário de Termos Técnicos}
            \renewcommand*{\acronymname}{Glossário de Siglas e Abreviações}
        }
    }

    \newcommand{\trl}
    {
        \begin{table}[t]
            \begin{tabular}{|c|l|}
            \hline
            \rowcolor[HTML]{343434}
            {\color[HTML]{EFEFEF} TRL} & {\color[HTML]{EFEFEF} Descrição}\\ \hline
                9 & Sistema foi ``provado'' após sucessivas operações em produção\\ \hline
                8 & Sistema completo e qualificado após testes e demonstrações em ambiente de produção \\ \hline
                7 & Protótipo ou modelo do sistema demonstrado num ambiente de produção \\ \hline
                6 & Protótipo ou modelo do sistema demonstrado num ambiente próximo ao de produção \\ \hline
                5 & Componente validado num ambiente de pré-produção \\ \hline
                4 & Componente validado num ambiente de testes \\ \hline
                3 & Análise crítica e experimental da funcionalidade ou de sua prova de conceito \\ \hline
                2 & Especificação ou formulação da tecnologia e aplicação funcional \\ \hline
                1 & Relato da observação de princípios básicos \\ \hline
            \end{tabular}
            \captionof{table}{``\textit{Technical Readines Level}''\label{tab:trl}}
        \end{table}    
    }

    \newcolumntype{C}[1]
    {
    >{\centering\let\newline\\\arraybackslash\hspace{0pt}}p{#1}
    }

    \newcolumntype{L}[1]
    {
    >{\raggedright\let\newline\\\arraybackslash\hspace{0pt}}p{#1}
    }

    \newbibmacro{tabular:labelnumber}
    {
        \printtext[labelnumberwidth]
        {
            \printfield{labelprefix}
            \printfield{labelnumber}
        }
    }

    \newcommand{\usBibTab}[2]{

        \defbibtabular{bibtabular}
        {
            \setlength{\LTpre}{0pt}
            \setlength{\LTpost}{0pt}
            \renewcommand*{\arraystretch}{1.2}
            \begin{longtable}
            {
                @{} 
                >{\footnotesize}C{\dimexpr0.1\textwidth-\tabcolsep\relax}
                |
                L{\dimexpr0.3\textwidth-\tabcolsep\relax} 
                |
                >{\footnotesize}L{\dimexpr0.55\textwidth-\tabcolsep\relax} 
                @{}
            }
            \hline
                \multicolumn{3}{ c }{\cellcolor{black} \color{white} \textbf{#1}} \\
            \hline
                \normalsize{\#} & Autor & \normalsize{Título} \\
            \hhline{ = | = | = }
            \endfirsthead
                \hline
                    \multicolumn{3}{ c }{\cellcolor{black} \color{white} \textbf{#1} (\textit{cont.})} \\
                \hline
                    \normalsize{\#} & Autor & \normalsize{Título} \\
                \hhline{ = | = | = }
            \endhead
                \caption{#1}\label{#2}
            \endlastfoot
        }
        {
            \end{longtable}
        }
        {
            \anchorlang{\usebibmacro{tabular:labelnumber}} &
            \anchorlang{\usebibmacro{tabular:sortname}} & 
            \driver{\usebibmacro{tabular:omitsortname}} 
            \\ 
            \hline
        }

        \setbool{bbx:alpha}{false}
        \printbibtabular[heading=none]

    }
}

\iftoggle{calendars}
{
    \usetikzlibrary{calendar,positioning}
    \tikzstyle{week list sunday}=[
        execute before day scope={
            \ifdate{day of month=1}{
                \ifdate{equals=\pgfcalendarbeginiso}{}{
                    \pgfmathsetlength{\pgf@y}{\tikz@lib@cal@month@yshift}
                    \pgftransformyshift{-\pgf@y}
                }
            }{}
        },
        execute at begin day scope={
            \pgfmathsetlength\pgf@x{\tikz@lib@cal@xshift}
            \ifnum\pgfcalendarcurrentweekday=6
                \c@pgf@counta=0
            \else
                \c@pgf@counta=\pgfcalendarcurrentweekday
                \advance\c@pgf@counta by 1
            \fi
            \pgf@x=\c@pgf@counta\pgf@x
            \pgftransformxshift{\pgf@x}
        },
        execute after day scope={
            \ifdate{Saturday}{
                \pgfmathsetlength{\pgf@y}{\tikz@lib@cal@yshift}
                \pgftransformyshift{-\pgf@y}
            }{}
        },
        tikz@lib@cal@width=7
    ]
    \def\pgfcalendar@matchesfalse{
        \global\let\ifpgfcalendar@matches\iffalse
    }
    \def\pgfcalendar@matchestrue{
        \global\let\ifpgfcalendar@matches\iftrue
    }
    \pgfcalendar@matchesfalse
    \pgfqkeys{/pgf/calendar}{
        and/.code 2 args={
            \begingroup
                \ifdate{#1}{
                    \ifdate{#2}{\pgfcalendar@matchestrue}{}
                }{}
            \endgroup
            \ifpgfcalendar@matches\pgfcalendarmatchestrue\pgfcalendar@matchesfalse\fi
        }
    }
    \def\pgfcalendarmonthname#1{ 
        \translate{ 
            \ifcase#1\or Janeiro\or Fevereiro\or Março\or Abril\or Maio\or Junho\or Julho\or Agosto\or Setembro\or Outubro\or Novembro\or Dezembro\fi 
        } 
    }
    \def\pgfcalendarmonthshortname#1{ 
        \translate{ 
            \ifcase#1\or Jan\or Fev\or Mar\or Abr\or Mai\or Jun\or Jul\or Ago\or Set\or Out\or Nov\or Dez\fi 
        } 
    }
    \def\pgfcalendarweekdayshortname#1{ 
        \translate{ 
            \ifcase#1\or Seg\or Ter\or Qua\or Qui\or Sex\or Sab\or Dom\fi 
        } 
    }
    \def\pgfcalendarweekdayname#1{ 
        \translate{ 
            \ifcase#1\or Segunda\or Terça\or Quarta\or Quinta\or Sexta\or Sábado\or Domingo\fi 
        } 
    }
}
{
    \usetikzlibrary{positioning}
}

\RequirePackage[edges]{forest}

\definecolor{folderbg}{RGB}{124,166,198}
\definecolor{folderborder}{RGB}{110,144,169}

\newlength\Size
\setlength\Size{4pt}

\tikzset{
    folder/.pic={
        \filldraw [draw=folderborder, top color=folderbg!50, bottom color=folderbg] (-1.05*\Size,0.2\Size+5pt) rectangle ++(.75*\Size,-0.2\Size-5pt);
        \filldraw [draw=folderborder, top color=folderbg!50, bottom color=folderbg] (-1.15*\Size,-\Size) rectangle (1.15*\Size,\Size);
    },
    file/.pic={
        \filldraw [draw=folderborder, top color=folderbg!5, bottom color=folderbg!10] (-\Size,.4*\Size+5pt) coordinate (a) |- (\Size,-1.2*\Size) coordinate (b) -- ++(0,1.6*\Size) coordinate (c) -- ++(-5pt,5pt) coordinate (d) -- cycle (d) |- (c) ;
    },
}
\forestset{
    declare autowrapped toks={pic me}{},
    pic dir tree/.style={
        for tree={
            folder,
            font=\ttfamily,
            grow'=0,
        },
        before typesetting nodes={
            for tree={
                edge label+/.option={pic me},
            },
        },
    },
    pic me set/.code n args=2{
        \forestset{
            #1/.style={
                inner xsep=2\Size,
                pic me={pic {#2}},
            }
        }
    },
    pic me set={directory}{folder},
    pic me set={file}{file},
}

\RequirePackage{csvsimple}

\RequirePackage{orcid}

\newenvironment{dedication}
{
    \clearpage
    \thispagestyle{empty}
    \vspace*{\stretch{1}}
    \hfill\begin{minipage}{0.8\linewidth}
        \itshape
        \raggedleft
}
{
        \par
    \end{minipage}
    \clearpage
}

\raggedbottom

\AtBeginDocument{

    \selectlanguage{portuguese}

    \ifthenelse{\boolean{gt:article}}
    {
        \maketitle
    }

    \ifthenelse{\boolean{gt:poster}}
    {
        \ifanullb
            \iftoggle{portrait}
            {
                \special{papersize=91.4cm,129.3cm}\else\special{papersize=129.3cm,91.4cm}
            }
        \else
            \ifanull
                \iftoggle{portrait}
                {
                    \special{papersize=83.96cm,118.82cm}\else\special{papersize=118.82cm,83.96cm}
                }
            \else
                \ifaeins
                    \iftoggle{portrait}
                    {
                        \special{papersize=59.4cm,83.96cm}\else\special{papersize=83.96cm,59.4cm}
                    }
                \else
                    \ifazwei
                        \iftoggle{portrait}
                        {
                            \special{papersize=41.98cm,59.4cm}\else\special{papersize=59.4cm,41.98cm}
                        }
                    \else
                        \ifadrei
                            \iftoggle{preview}
                            {
                                \iftoggle{portrait}{\special{papersize=29.7cm,41.35cm}\else\special{papersize=41.98cm,29.0cm}}\
                            }
                            {
                                \iftoggle{portrait}{\special{papersize=29.7cm,41.98cm}\else\special{papersize=41.98cm,29.7cm}}
                            }
                        \else
                            \relax
                        \fi
                    \fi
                \fi
            \fi
        \fi
        \pagestyle{empty}
    }

    \ifthenelse{\boolean{gt:article}\OR\boolean{gt:poster}}
    {

    }
    {
        \fancyhead{}
        \setlength{\headheight}{52pt}
        
        \maketitle

        \thispagestyle{empty}

        \ifdraft{
            \date{\textbf{\huge \today~-~\currenttime}}
            \fancyfoot{}
            \fancyfoot[LO,RE]{\textbf{\textit{Esboço}} \textit{\today~-~\currenttime}}
            \fancyfoot[RO,LE]{\thepage}
        }
        {
            \date{\today}
        }

        \iftoggle{toc}
        {
            \pagenumbering{roman}

            \clearpage
            % \setcounter{tocdepth}{3}
            % \setcounter{secnumdepth}{3}
            \tableofcontents
            \bigskip
            \iftoggle{figures}
            {
                \listoffigures
                \bigskip
            }
            % \iftoggle{formulas}
            % {
            %     \listofformulas
            %     \bigskip
            % }
            \iftoggle{tables}
            {
                \listoftables
                \bigskip
            }
            % \iftoggle{listings}
            % {
            %     \listoflistings
            %     \bigskip
            % }
            % \iftoggle{algorithms}
            % {
            %     \listofalgorithms
            %     \bigskip
            % }
            \ifthenelse{\boolean{gt:glossaries}}
            {
                \printglossary[type=main]
                \bigskip
                \printglossary[type=acronym]
            }

            \pagenumbering{arabic}

            \clearpage
        }

        \setbool{bbx:alpha}{false}
    }

}

\AtEndDocument{

    \FloatBarrier
    \ifthenelse{\boolean{gt:report}}
    {
        \clearpage
    }

    \ifthenelse{\boolean{gt:article}\OR\boolean{gt:report}}
    {
        \ifthenelse{\boolean{gt:glossaries}\AND\boolean{gt:article}}
        {
            \printglossary[type=main]
            \bigskip
            \printglossary[type=acronym]
        }

        \ifthenelse{\boolean{gt:report}}
        {
            \clearpage
        }

        \pagenumbering{alph}
        \setbool{bbx:alpha}{false}
        \AtNextBibliography{\footnotesize}
        \printbibliography[heading=bibintoc]
    }
    {
        \ClassWarning{GT}{Não foi configurado para \textit{article} ou \textit{report}}{Na definição da classe deve ser inserida uma das duas chaves:  \textit{article} ou \textit{report}}
    }

}

\endinput