all:
	rm -rf public
	hugo -D
#	rsync -avzhe 'ssh -p 2222' public/ verri@dominios.ita.br:public_html

