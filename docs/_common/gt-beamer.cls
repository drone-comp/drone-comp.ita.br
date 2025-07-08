\ProvidesClass{gt-beamer}
\LoadClass[xcolor=table,aspectratio=1610,english,brazil]{beamer}

\RequirePackage[T1]{fontenc}
\RequirePackage[brazil]{babel}
\RequirePackage{pifont}
\RequirePackage{graphicx}
\RequirePackage{transparent}
\RequirePackage{multirow}
\RequirePackage{booktabs}
\RequirePackage{hyperref}
\RequirePackage{mdframed}
\RequirePackage{multicol}
\RequirePackage{csquotes}
\RequirePackage{appendixnumberbeamer}
\RequirePackage{pgfplots}
\RequirePackage{pgfpages}
\RequirePackage{xspace}
\RequirePackage{mdframed}
\RequirePackage[normalem]{ulem}
\RequirePackage{glossaries}
\RequirePackage{multiaudience}
\RequirePackage[portuguese]{algorithm2e}

\setbeamertemplate{note page}{\pagecolor{yellow!5}\insertnote}\RequirePackage{palatino}
%
% Usamos o tema de beamer Metropolis nesta apresentação:
%   https://ctan.org/pkg/beamertheme-metropolis
%   https://github.com/matze/mtheme
%
\usetheme{metropolis}
\useoutertheme{metropolis}
\useinnertheme{metropolis}
\usefonttheme{metropolis}
\usecolortheme{orchid}

\usepgfplotslibrary{dateplot}

\setacronymstyle{long-short}
\setglossarystyle{altlist}

%
% Customizações do beamer para não ocupar muito espaço nas páginas com figuras
%
\setbeamerfont{caption}{size=\tiny}

% 01 - US #
\newcommand{\us}[1]{
    \def \usNumber {#1}
}

% 01 - Sprint #
% 02 - Review Date
\newcommand{\usSprint}[2]{
    \def \usSprint{#1}
    \def \usDate{#2}
}

\newcommand{\usTOC}{

    \AtBeginSection[] {
        \begin{frame}
            \frametitle{Agenda}
            \begin{multicols}{3}
                \tableofcontents[currentsection]
            \end{multicols}
        \end{frame}
    }

    \AtBeginSubsection[] {
        \begin{frame}
            \frametitle{Agenda}
            \begin{multicols}{3}
                \tableofcontents[currentsection,currentsubsection]
            \end{multicols}
        \end{frame}
    }

}

% 01 - ita_logo
\newcommand{\usCover}[1]{

    \begin{frame}[plain,noframenumbering]
        \centering
        \begin{figure}[t]
            \includegraphics[scale=.15]{#1}
        \end{figure}
        \large{\insertinstitute} \\
        \tiny{Divisão de Ciência da Computação - IEC} \\
        \tiny{\textit{Grupo de Pesquisa em Engenharia de Software - GPES}} \\
        \large{Projeto STAMPS} \\
        \large{Soluções Tecnológicas Aplicadas à Mídias e Produtos Sociais} \\
        \begin{mdframed}[linecolor=black,leftmargin=-1cm,rightmargin=-1cm,backgroundcolor=black]\centering\LARGE{\textbf{\color{white}Apresentação da Sprint \usDate~- US \usNumber}}\end{mdframed}
        \raggedright
        \vspace{0.2cm}
        \scriptsize{\textbf{Coordenação Técnica}} \\
        \tiny{~Prof. Dr. Adilson Marques da \textbf{CUNHA}} \\
        \vspace{0.2cm}
        \scriptsize{\textbf{Scrum Master} / \textbf{Product Owner}} \\
        \tiny{~\textbf{GOMES}, J.M. / Prof. Dr. Vieira \textbf{DIAS} \hfill São José dos Campos, \usDate}
    \end{frame}

    \maketitle
    
    %
    % Customizações do plano de fundo do slide
    %
    \usebackgroundtemplate{
        \vbox to \paperheight{\vfil\hbox to \paperwidth{\hfil{\transparent{0.1}\includegraphics[width=\paperwidth]{#1}}\hfil}\vfil}
    }

}

% 01 - Desejo
% 02 - Para
\newcommand{\usStory}[2]{

    \begin{block}{User Story}
        \begin{itemize}
            \item \textbf{DESEJA-SE} \textit{#1}
            \item \textbf{PARA} \textit{#2}
        \end{itemize}
    \end{block}

}

% 01 - Dado
% 02 - Quando
% 03 - Então
\newcommand{\usCriteria}[3]{
    \begin{itemize}
        \item \textbf{DADO(a)} \textit{#1}
        \item \textbf{QUANDO} \textit{#2}
        \item \textbf{ENTÃO} \textit{#3}
    \end{itemize}
}

\makeatletter
    \newenvironment{catalog+}{%
        \enumerate
        \setcounter{\@enumctr}{\csname saved@\@enumctr\endcsname}%
    }{%
        \expandafter\xdef\csname saved@\@enumctr\endcsname{\the\value{\@enumctr}}%
        \endenumerate
    }

    \newenvironment{catalog}{%
        \enumerate
    }{%
        \expandafter\xdef\csname saved@\@enumctr\endcsname{\the\value{\@enumctr}}%
        \endenumerate
    }
\makeatother

% 01 - Imagem
\newcommand{\usFinish}[1]{

    \section{Fim}
    \appendix
	\subsection{That's all folks!}

    % \begin{frame}[allowframebreaks,standout]{Referencias}
    %
    %     \bibliography{bibliografia}
    %     \bibliographystyle{abbrv}
    %
    % \end{frame}

    \begin{frame}[standout]
        Perguntas?
    \end{frame}

    \begin{frame}[standout]
        Trabalho aceito?\\
        Ressalvas?
    \end{frame}

    \begin{frame}[standout]
        \frametitle{Fim!}

        \begin{figure}[t]
            \centering
            \includegraphics[scale=.3]{#1}\\
            \scalebox{.125}{Best viewed with Netscape Navigator 4.0 or below on a Pentium III emulated in Javascript on an Apple IIGS at a screen resolution of 1024x1. Please enable your ad blockers, disable high-heat drying, and remove your device from Airplane Mode and set it to Boat Mode. For security reasons, please leave caps lock on while browsing.}
        \end{figure}

    \end{frame}

}


\newenvironment{usHistory}[2]
{
    \def\usHistoryTitle{#1}
    \def\usHistoryLabel{#2}

    \newcommand{\usHistoryItem}[3]
    {
        \hline
        \textbf{##1} & ##2 & ##3 \\
    }

    \begin{table}[ht!]
        \renewcommand{\arraystretch}{1.2}
        \centering
        % \caption{\usHistoryTitle}\label{\usHistoryLabel}
        \begin{tabular}{ | p{25mm} | p{50mm} | c | }
            \hline
                \multicolumn{3}{ | c | }{\cellcolor{black} \color{white} \textbf{\usHistoryTitle}} \\
            \hline
                \multicolumn{1}{| c | }{US} & Descrição & Data \\
            \hline
}
{
            \hline
        \end{tabular}
    \end{table}
}

\def\Ok{\color{green}\ding{52}\color{black}}
\def\NotOk{\color{red}\ding{55}\color{black}}