.PHONY: all

login:
	export CR_PAT=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 
	echo $CR_PAT | docker login ghcr.io -u shubh-verma --password-stdin

all:
	docker run --rm -v $(CURDIR):usr/share/nginx//html -p 80:80 --name server nginx:latest