all:
	rm -rf public
	hugo --gc --minify
	rsync -avzhe 'ssh -p 2222' public/ wmdronecomp@dominios02.ita.br:.
