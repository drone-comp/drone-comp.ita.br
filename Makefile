all:
	rm -rf public
	hugo -D
	rsync -avzhe 'ssh -p 2222' public/ wmdronecomp@dominios02.ita.br:html
