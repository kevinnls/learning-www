PORT ?= 8080
dev:
	podman run \
		--name learning-www \
		--detach --rm \
		--publish=$(PORT):80 \
		--volume ./:/usr/share/nginx/html:ro,Z \
		docker.io/library/nginx:alpine

