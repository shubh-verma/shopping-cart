.PHONY: all

all:
	docker run --rm -v $(CURDIR):usr/share/nginx//html -p 80:80 --name server nginx:latest