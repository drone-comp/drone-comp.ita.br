@default_files = ('_relatorio.tex');
$pdf_mode = 1; 
$pdflatex = 'pdflatex  %O  --shell-escape %S';
$clean_ext = 'acn bcf bbl dvi frm glg glo gls ist loa lol mw run.xml xwm glhidden glhiddenin';
add_cus_dep('glo', 'gls', 0, 'makeglo2gls');
add_cus_dep('acn', 'acr', 0, 'makeacn2acr');
sub makeglo2gls {
    if ( $silent ) {
        system("makeindex -q -s '$_[0]'.ist -t '$_[0]'.glg -o '$_[0]'.gls '$_[0]'.glo");
    }
    else {
        system("makeindex -s '$_[0]'.ist -t '$_[0]'.glg -o '$_[0]'.gls '$_[0]'.glo");
    }
}
sub makeacn2acr {
  if ( $silent ) {
    system("makeglossaries -q '$_[0]'");
  }
  else {
    system("makeglossaries '$_[0]'");
  };
}